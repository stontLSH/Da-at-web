// LandingPage.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Twitter, Instagram } from 'lucide-react'

function LandingPage() {
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

      {/* 추가된 캐릭터 및 FAQ 섹션 등 나머지 섹션 */}
    </div>
  )
}

export default LandingPage
