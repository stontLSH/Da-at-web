import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Twitter, Instagram } from 'lucide-react'


import img01 from './public/images/thaaatbird.png';
import img02 from './public/images/bigeye.png';
import img03 from './public/images/quokka.png';
import img04 from './public/images/goldbat.png';
import img05 from './public/images/bebbird.png';


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
  className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center bg-[url('./placeholder.png')] bg-cover bg-center h-[700px]"
>
  <div className="md:w-1/2 mb-10 md:mb-0 bg-black bg-opacity-60 p-6 rounded-lg">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">POCHI - the cozy sanctuary</h1>
    <p className="text-xl mb-6">
      부산소마고의 동아리 Da'at의 신작, 'POCHI'!<br></br>동물들을 잡아 보호소로 이송시키고,
      <br></br>보상금으로 더 좋은 장비를 구입하세요.<br></br>도감을 채우며, 자유롭게 힐링하세요!
    </p>
    <Button className="bg-blue-600 hover:bg-blue-700">설치하러 가기</Button>
  </div>
  <div className="md:w-1/2">
  </div>
</section>

      {/* Features Section */}
<section className="bg-gray-900 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">당신의 목표</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['동물 보호', '보상금 받고 도구 구매', '도감 수집'].map((feature, index) => {
        let content;
        switch (feature) {
          case '동물 보호':
            content = "동물이 멸종하도록 내버려둘 수는 없겠죠? 위험한 상황에 부닥친 동물들을 잡아 안전한 곳으로 보내야 합니다.";
            break;
          case '보상금 받고 도구 구매':
            content = "자신의 돈마저도 동물들을 위해 사용하는군요! 혹시, 동물 보호에 도움이 되는 장비들을 구매해보는 건 어떤가요?";
            break;
          case '도감 수집':
            content = "구출한 동물들을 잊어버리지 않도록 도감에 기록해봅시다. 다 채워졌을 때의 도감이 기대되는걸요?";
            break;
        }

        return (
          <Card key={index} className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-white">{feature}</CardTitle>
            </CardHeader>
            <CardContent className="text-white">
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
        { name: '저어새', image: img01 }, // 파일 이름 확인
        { name: '큰눈원숭이', image: img02 },
        { name: '쿼카', image: img03 },
        { name: '황금박쥐', image: img04 },
        { name: '뱁새', image: img05 }
      ].map((character, index) => (
        <Card key={index} className="bg-gray-800 text-white">
          <CardContent className="p-4">
            <Image 
              src={character.image} 
              alt={`${character.name} character`} 
              width={200} 
              height={200} 
              className="rounded-lg mb-2"
              priority={index < 2} // 상위 두 개의 캐릭터에 우선 순위 설정
            />
            <p className="text-center">{character.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
{/* Member Introduction Section */}
<section className="bg-gray-900 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center text-white">멤버 소개</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
      {[
        {
          name: '박현호', // 이름
          role: '팀장', // 직책
          description: '팀을 이끄는 리더로, 프로젝트의 전반적인 방향을 맡고 있습니다.',
          image: img01, // 멤버 이미지 경로
        },
        {
          name: '이동건', // 기획자 이름
          role: '기획자', // 직책
          description: '게임의 콘셉트 및 시스템을 기획하고, 게임의 흐름을 설계합니다.',
          image: img01, // 기획자 이미지 경로
        },
        {
          name: '박수빈 안시현 이효준 천현수',
          role: '디자이너',
          description: '게임 내 그래픽과 UI를 담당하며, 사용자의 경험을 최적화합니다.',
          image: img01, // 멤버 이미지 경로
        },
        {
          name: '김주영 이신우 이준원 이수환 김유찬',
          role: '개발자',
          description: '백엔드 및 서버 개발을 담당하며, 안정적인 게임 환경을 제공합니다.',
          image: img01, // 멤버 이미지 경로
        },
      ].map((member, index) => (
        <Card key={index} className="bg-gray-800 text-white">
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
          <CardContent className="p-4">
            <p>{member.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Unveiling Clarity: Your Questions Answered</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { question: "Is 'Futuristic Dystopia' a multiplayer game?", answer: "Yes, it features both single-player and multiplayer modes." },
              { question: "What are the system requirements?", answer: "The game requires a modern gaming PC or console. Specific requirements can be found on our technical specs page." },
              { question: "How often do you release new content?", answer: "We aim to release major updates quarterly, with smaller patches and events occurring more frequently." },
              { question: "Da'at엔 어떤 학생들이 있나요?", answer: "Da'at엔 게임 개발의 상위 1% 엘리트들만 모여있습니다." }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Futuristic Dystopia. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
            </div>
            <div className="mt-4 md:mt-0">
              <form className="flex">
                <Input type="email" placeholder="Enter your email" className="mr-2" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}