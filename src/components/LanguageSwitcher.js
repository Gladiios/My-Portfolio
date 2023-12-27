import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = () => {
    const newLanguage = router.locale === "en" ? "fr" : "en";
    router.push(router.pathname, router.asPath, { locale: newLanguage });
  };

  const displayLanguage = router.locale === "en" ? "FR" : "EN";

  return (
    <div className="language-switcher">
      <span style={{ cursor: "pointer" }} onClick={changeLanguage}>
        {displayLanguage}
      </span>
    </div>
  );
};

export default LanguageSwitcher;
