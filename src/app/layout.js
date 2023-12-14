import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
}
