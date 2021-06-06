import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => {
  console.log("locale of getStaticProps", locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div className="main-wrap">
      <h1>NextJS i18n practice</h1>
      <p>{t("header-message")}</p>
      <div>
        <Link href="/" locale="en">
          <button>English</button>
        </Link>
        <Link href="/" locale="ko">
          <button>한국어</button>
        </Link>
      </div>
    </div>
  );
}
