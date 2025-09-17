import { getT } from "../../i18n/";

export default async function Page() {
    const { t } = await getT("common");

    return <div>{t('home')}</div>;
}
