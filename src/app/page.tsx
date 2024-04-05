"use client";

export default function Home() {
  const onAppleClick = () => {
    const searchParam = new URLSearchParams(location.search);

    const redirectUri = `https://${location.hostname}`;
    const url = `https://appleid.apple.com/auth/authorize?response_type=code&scope=name%20email&client_id=${searchParam.get(
      "c"
    )}&redirect_uri=${encodeURI(`${redirectUri}/oauth/apple`)}`;
    location.href = url;
  };

  return (
    <button onClick={onAppleClick} className="btn bg-white">
      APPLE 회원가입
    </button>
  );
}
