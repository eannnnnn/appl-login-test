"use client";

export default function Home() {
  const onAppleClick = () => {
    const searchParam = new URLSearchParams(location.href);

    const redirectUri = `https://${location.hostname}`;
    const url = `https://appleid.apple.com/auth/authorize?response_type=code&client_id=${searchParam.get(
      "c"
    )}&redirect_uri=${encodeURI(`${redirectUri}/oauth/apple`)}&state=SIGN_UP`;
    location.href = url;
  };

  return (
    <button onClick={onAppleClick} className="btn bg-white">
      APPLE 회원가입
    </button>
  );
}
