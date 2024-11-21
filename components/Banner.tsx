import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 이미지를 위한 import
import img01 from './/../public/images/thaaatbird.png'
import img02 from './/../public/images/bigeye.png'
import img03 from './/../public/images/quokka.png'
import img04 from './/../public/images/goldbat.png'
import img05 from './/../public/images/bebbird.png'

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src="/../public/pochi.png"
          layout="fill"
          objectFit="cover"
          alt=''
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        POCHI - The cozy sanctuary
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        부산소마고의 동아리 Da'at의 신작, 'POCHI'! 동물들을 잡아 보호소로 이송시키고, 보상금으로 더 좋은 장비를 구입하세요. 도감을 채우며, 자유롭게 힐링하세요!
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
              { name: '저어새', image: img01 },
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
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">멤버 소개</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {[
              { name: '박현호', role: '팀장', description: '팀을 이끄는 리더로, 프로젝트의 전반적인 방향을 맡고 있습니다.', image: img01 },
              { name: '이동건', role: '기획자', description: '게임의 콘셉트 및 시스템을 기획하고, 게임의 흐름을 설계합니다.', image: img01 },
              { name: '박수빈 안시현 이효준 천현수', role: '디자이너', description: '게임 내 그래픽과 UI를 담당하며, 사용자의 경험을 최적화합니다.', image: img01 },
              { name: '김주영 이신우 이준원 이수환 김유찬', role: '개발자', description: '백엔드 및 서버 개발을 담당하며, 안정적인 게임 환경을 제공합니다.', image: img01 }
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
    </div>
  )
}

export default Banner
