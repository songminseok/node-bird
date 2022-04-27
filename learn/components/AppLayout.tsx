import Link from "next/link"
import React from "react";

interface Props {
  children: React.ReactNode
}

const AppLayout = ({children}: Props) => {
  return (
    <div>
      <Link href="/"><a>홈</a></Link>
      <Link href="/profile"><a>프로필</a></Link>
      <Link href="/signup"><a>회원가입</a></Link>
      {children}
    </div>
  )
}

export default AppLayout