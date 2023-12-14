import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (language) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
