"use client";

import { useT } from "@/app/i18n/client";
import { useEffect, useMemo, useState } from "react";
import { SelectedBtns } from "./SelectedBtns";
import { Btn, NewItemModal } from "./";
import { useInputs } from "@/hooks/useInputs";
import { Item } from "@/types";
import { fetcher } from "@/utils/fetcher";
import { useFetch } from "@/hooks/useFetch";

const appsJson = [
    {
        name: "showcase1",
        apiKey: process.env.NEXT_PUBLIC_API_KEY_SHOWCASE1,
    },
    {
        name: "showcase2",
        apiKey: process.env.NEXT_PUBLIC_API_KEY_SHOWCASE2,
    },
];

const urlApi = process.env.NEXT_PUBLIC_API_URL;

export const Inventory = () => {
    const { t } = useT("inventory");

    const [selectedApp, setSelectedApp] = useState<string>(appsJson[0].name);
    const [selectedAppUser, setSelectedAppUser] = useState<string>("");
    const [appUserIds, setAppUserids] = useState<string[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [itemIsLoading, setItemIsLoading] = useState<boolean>(false);
    const [itemError, setItemError] = useState<string>("");

    const inputs = { name: "", quantity: "", app_user_id: "" };

    const [values, onChange, reset] = useInputs(inputs);

    const apiKey = appsJson.find(v => v.name === selectedApp)?.apiKey || "";
    const fetchOptions = useMemo(
        () => ({
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
        }),
        [apiKey]
    );

    const {
        data: initialUserData,
        isLoading: userIsLoading,
        error: userError,
    } = useFetch<string[]>(urlApi + `/items/getAllAppUserId`, fetchOptions);

    useEffect(() => {
        if (initialUserData && initialUserData != appUserIds) {
            setAppUserids(initialUserData);
        }
    }, [initialUserData]);

    const handleSelectApp = (selectItem: string) => {
        setItems([]);
        setSelectedAppUser("");
        setSelectedApp(selectItem);
    };

    const handleSelectAppUser = async (selectAppUser: string) => {

        setSelectedAppUser(selectAppUser);

        try {
            const data = await fetcher<Item[]>(urlApi + `/items/findWithAppUserId/${selectAppUser}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey,
                },
            });

            setItems(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleOpenNewItemModal = async () => {
        if (items.length > 10) return alert(t("alert_max_items"));
        if (appUserIds.length > 10) return alert(t("alert_max_appUsers"));
        setShowModal(true);
    };

    const handleAddItem = async () => {
        if (!apiKey) return;

        try {
            setItemIsLoading(true);
            const data = await fetcher<Item>(urlApi + `/items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey,
                },
                body: JSON.stringify({ ...values, quantity: +values.quantity }),
            });

            if (data.app_user_id === selectedAppUser) setItems(prev => [...prev, data]);

            if (!appUserIds.includes(data.app_user_id)) setAppUserids(prev => [...prev, data.app_user_id]);

            reset();

            setShowModal(false);
        } catch (err) {
            setItemError(typeof err === "string" ? err : "Unknow error");
        } finally {
            setItemIsLoading(false);
        }
    };

    const handleDeleteItem = async (itemId: number) => {
        if (!apiKey) return;
        try {
            const response = await fetch(urlApi + `/items/softDelete/${itemId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey,
                },
            });

            const json = await response.json();

            if (json.error) return console.error(json.message);

            setItems(items => items.filter(item => item.id != itemId));
        } catch (err) {
            console.error(err);
        }
    };

    const handleOnClose = () => {
        setShowModal(false);
    };

    const usersDisplay = userIsLoading ? (
        <div className="flex justify-center">
            <span className="loader"></span>
        </div>
    ) : userError ? (
        <p className="text-center">{userError}</p>
    ) : appUserIds.length > 0 ? (
        <SelectedBtns
            btnsName={appUserIds}
            onSelect={handleSelectAppUser}
            selectedBtn={selectedAppUser}
        />
    ) : (
        <p className="text-center">{t("empty_user")}</p>
    );

    const itemsDisplay = itemIsLoading ? (
        <div className="flex justify-center">
            <span className="loader"></span>
        </div>
    ) : itemError ? (
        <p className="text-center">{itemError}</p>
    ) : items.length > 0 ? (
        items.map(item => (
            <div
                key={item.id}
                className="grid grid-cols-3 p-5 border-y justify-between"
            >
                <p> {item.name}</p>
                <p>x{item.quantity}</p>
                <Btn
                    className="h-8 w-8"
                    onClick={() => handleDeleteItem(item.id)}
                >
                    -
                </Btn>
            </div>
        ))
    ) : (
        <p className="text-center">{t("empty_inventory")}</p>
    );

    return (
        <div className="flex flex-col h-screen">
            <h1>{t("inventory_header")}</h1>
            <div className="flex flex-1 grid grid-cols-3 overflow-hidden">
                <div className="border-r">
                    <h2>{t("app")}</h2>
                    <SelectedBtns
                        btnsName={appsJson.map(appJson => appJson.name)}
                        onSelect={handleSelectApp}
                        selectedBtn={selectedApp}
                    />
                </div>
                <div className="border-r overflow-auto min-h-0 p-2">
                    <h2>{t("user")}</h2>
                    {usersDisplay}
                </div>
                <div className="overflow-auto min-h-0 p-2">
                    <div className="flex justify-center items-center mb-2">
                        <h2>{t("inventory")}</h2>
                        <Btn
                            className="h-8 w-8"
                            onClick={handleOpenNewItemModal}
                        >
                            +
                        </Btn>
                    </div>
                    {itemsDisplay}
                </div>
            </div>
            <NewItemModal
                visible={showModal}
                values={values}
                onChange={onChange}
                onClose={handleOnClose}
                onAddItem={handleAddItem}
            />
        </div>
    );
};
