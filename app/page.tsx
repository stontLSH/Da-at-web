"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from 'react';

import img01 from './public/images/thaaatbird.png';
import img02 from './public/images/bigeye.png';
import img03 from './public/images/quokka.png';
import img04 from './public/images/goldbat.png';
import img05 from './public/images/pijon.png';
import img06 from './public/images/waterDeer 1.png';
import img07 from './public/images/image 1143.png';
import img08 from './public/images/coyote 1.png';
import img09 from './public/images/dambi 1.png';
import img10 from './public/images/image 1117.png';
import img11 from './public/images/fox.png';
import heroBackground from './public/images/placeholder.png';
import logo from './public/images/logo 3.png';

export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState('기획자');

  const members = [
    {
      name: '박현호',
      role: '기획자',
      image: img01,
    },
    {
      name: '이동건',
      role: '기획자',
      image: img09,
    },
    {
      name: '박수빈',
      role: '디자이너',
      image: img01,
    },
    {
      name: '안시현',
      role: '디자이너',
      image: img01,
    },
    {
      name: '이효준',
      role: '디자이너',
      image: img07,
    },
    {
      name: '천현수',
      role: '디자이너',
      image: img08,
    },
    {
      name: '김주영',
      role: '개발자',
      image: img01,
    },
    {
      name: '이신우',
      role: '개발자',
      image: img01,
    },
    {
      name: '이수환',
      role: '개발자',
      image: img10,
    },
    {
      name: '김유찬',
      role: '개발자',
      image: img06,
    },
  ];

  const filteredMembers =
    selectedRole === '전체'
      ? members
      : members.filter((member) => member.role === selectedRole);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full py-4 px-6 z-30">
        <div className="container mx-auto flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Image 
              src={logo}
              alt="pochi logo"
              width={120} 
              height={60} 
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: `url(${heroBackground.src})`,
            objectFit: 'cover',
            objectPosition: 'center top'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">POCHI - The cozy sanctuary</h1>
            <p className="text-xl mb-6 text-gray-200">부산소마고 동아리 Da'at의 신작, 'POCHI'! 동물들을 잡아 보호소로 이송시키고, <br />보상금으로 더 좋은 장비를 구입하세요. 도감을 채우며, 자유롭게 힐링하세요!</p>
            <Button className="bg-blue-600 hover:bg-blue-700">지금 플레이</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="bg-[#0f0f0f] py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">당신의 목표</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['동물 보호', '보상금 받고 도구 구매', '도감 수집'].map((feature, index) => {
        let content;
        switch (feature) {
          case '동물 보호':
            content = (
              <>
                동물이 멸종하도록 내버려둘 수는 없겠죠? <br />
                위험한 상황에 부닥친 동물들을 잡아 안전한 곳으로 <br />보내야 합니다.
              </>
            );
            break;
          case '보상금 받고 도구 구매':
            content = (
              <>
                자신의 돈마저도 동물들을 위해 사용하는군요! <br />
                혹시, 동물 보호에 도움이 되는 장비들을 구매해보는 건 어떤가요?
              </>
            );
            break;
          case '도감 수집':
            content = (
              <>
                구출한 동물들을 잊지 않도록 도감에 기록해봅시다.<br />
                다 채워졌을 때의 도감이 기대되는걸요?
              </>
            );
            break;
        }

        return (
          <Card key={index} className="bg-[#232323]">
            <CardHeader>
              <CardTitle className="text-white">{feature}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm md:text-base text-white text-center">
              <p>{content}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>


      {/* Characters Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">도움이 필요한 동물들</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: '여우', image: img11 },
              { name: '큰눈원숭이', image: img02 },
              { name: '양비둘기', image: img05 },
              { name: '황금박쥐', image: img04 },
              { name: '맹꽁이', image: img07 }
            ].map((character, index) => (
              <Card key={index} className="bg-[#232323] text-white">
                <CardContent className="p-4">
                  <Image 
                    src={character.image} 
                    alt={`${character.name} character`} 
                    width={200} 
                    height={200} 
                    className="rounded-lg mb-2"
                    priority={index < 2}
                  />
                  <p className="text-center">{character.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Introduction Section */}
<section className="bg-[#0f0f0f] py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center text-white">멤버 소개</h2>
    {/* Role Filter Buttons */}
    <div className="flex justify-center gap-4 mb-10">
      {['기획자', '디자이너', '개발자'].map((role) => (
        <button
          key={role}
          onClick={() => setSelectedRole(role)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedRole === role ? 'text-white' : 'text-gray-400'
          }`}
        >
          {role}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
      {filteredMembers.map((member, index) => (
        <Card key={index} className="bg-[#232323] text-white">
          <CardHeader className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm font-light">{member.role}</p>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">자주 묻는 질문</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { question: "기술 스택은 어떤 걸 사용했나요?", answer: "Unity, Adobe Photoshop, C#, Aseprite 등을 사용하였습니다." },
              { question: "이 게임은 언제 출시되나요?", answer: "현재 개발 중이며, 출시일은 추후 공개됩니다." },
              { question: "이 게임은 무료인가요?", answer: "네, POCHI는 무료로 제공됩니다." }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* Footer */}
<footer className="bg-[#0f0f0f] py-10">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      {/* Footer Left Section */}
      <p className="text-white">&copy; 2024 Pochi. All Rights Reserved.</p>

      {/* Footer Right Section - 버튼들 */}
      <div className="flex space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <button className="bg-gray-800 text-white p-2 rounded-md">
            GitHub
          </button>
        </a>
        <a href="mailto:bssmdaat3@gmail.com" className="text-white hover:text-gray-400">
          <button className="bg-gray-800 text-white p-2 rounded-md">
            Google
          </button>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <button className="bg-gray-800 text-white p-2 rounded-md">
            YouTube
          </button>
        </a>
      </div>
    </div>
  </div>
</footer>


    </div>
  );
}
