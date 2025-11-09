import { useState } from "react";
import Navigation from "@/components/Navigation";
import { drops } from "@/data/dropsData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [selectedDropId, setSelectedDropId] = useState(drops[0].id);
  const selectedDrop = drops.find(d => d.id === selectedDropId) || drops[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            <span className="neon-text-cyan" style={{color: '#5ae0b3'}}>BLOCK</span>
            <span className="neon-text-green" style={{color: '#beadde'}}>RUN</span>
          </h1>
          
          {/* Main Layout: Drops buttons on sides, description in center */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-6 items-start">
              {/* Left column - Drops 1-6 */}
              <div className="hidden lg:flex flex-col gap-3">
                {drops.slice(0, 6).map((drop, index) => {
                  const colors = ["border-[#5ae0b3]", "border-[#beadde]", "border-[#7dd3a7]", "border-[#5ae0b3]", "border-[#beadde]", "border-[#7dd3a7]"];
                  const textColors = ["text-[#5ae0b3]", "text-[#beadde]", "text-[#7dd3a7]", "text-[#5ae0b3]", "text-[#beadde]", "text-[#7dd3a7]"];
                  
                  return (
                    <Button
                      key={drop.id}
                      variant={selectedDropId === drop.id ? "default" : "outline"}
                      onClick={() => {
                        setSelectedDropId(drop.id);
                        setTimeout(() => {
                          const element = document.getElementById('drop-title');
                          if (element) {
                            const yOffset = -150; // Отступ сверху для полной видимости заголовка
                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className={`
                        ${selectedDropId === drop.id 
                          ? `bg-gradient-to-r from-${colors[index].replace('border-', '')} to-${colors[index].replace('border-', '')}/80 ${textColors[index]} border-2 ${colors[index]}` 
                          : `${colors[index]} border-2 ${textColors[index]} hover:bg-${colors[index].replace('border-', '')}/10`
                        }
                        transition-all duration-300 text-sm font-bold whitespace-nowrap
                      `}
                    >
                      Дроп {index + 1}
                    </Button>
                  );
                })}
              </div>

              {/* Center - Description */}
              <div className="px-4">
                <div className="border-2 border-[#5ae0b3] bg-card/30 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
                  <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
                    <p>
                      Идея дропов заключается в том, чтобы вовлекать сообщество в открытое цифровое пространство, 
                      где каждый участник может находить единомышленников, участвовать в развитии бренда и поддерживать экосистему.
                    </p>
                    <p>
                      Дроп становится своеобразным проводником в это пространство — он определяет интересы участников и символизирует их индивидуальность. 
                      Каждый дроп отражает принадлежность к определённой теме или идее.
                    </p>
                    <p>
                      Таким образом, мы создаём систему, где каждый участник может подчеркнуть свою идентичность, 
                      следовать своим интересам, находить близких по духу людей, делиться опытом и получать взаимную поддержку.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Drops 7-12 */}
              <div className="hidden lg:flex flex-col gap-3">
                {drops.slice(6, 12).map((drop, index) => {
                  const colors = ["border-[#5ae0b3]", "border-[#beadde]", "border-[#7dd3a7]", "border-[#5ae0b3]", "border-[#beadde]", "border-[#7dd3a7]"];
                  const textColors = ["text-[#5ae0b3]", "text-[#beadde]", "text-[#7dd3a7]", "text-[#5ae0b3]", "text-[#beadde]", "text-[#7dd3a7]"];
                  
                  return (
                    <Button
                      key={drop.id}
                      variant={selectedDropId === drop.id ? "default" : "outline"}
                      onClick={() => {
                        setSelectedDropId(drop.id);
                        setTimeout(() => {
                          const element = document.getElementById('drop-title');
                          if (element) {
                            const yOffset = -150; // Отступ сверху для полной видимости заголовка
                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className={`
                        ${selectedDropId === drop.id 
                          ? `bg-gradient-to-r from-${colors[index].replace('border-', '')} to-${colors[index].replace('border-', '')}/80 ${textColors[index]} border-2 ${colors[index]}` 
                          : `${colors[index]} border-2 ${textColors[index]} hover:bg-${colors[index].replace('border-', '')}/10`
                        }
                        transition-all duration-300 text-sm font-bold whitespace-nowrap
                      `}
                    >
                      Дроп {index + 7}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Mobile view - all drops in horizontal scroll */}
            <div className="lg:hidden mt-6 flex gap-2 overflow-x-auto pb-2">
              {drops.map((drop, index) => {
                const colors = ["border-[#5ae0b3]", "border-[#beadde]", "border-[#7dd3a7]", "border-[#5ae0b3]", "border-[#beadde]", "border-[#7dd3a7]"];
                const textColors = ["text-[#5ae0b3]", "text-[#beadde]", "text-[#7dd3a7]", "text-[#5ae0b3]", "text-[#beadde]", "text-[#7dd3a7]"];
                
                return (
                  <Button
                    key={drop.id}
                    variant={selectedDropId === drop.id ? "default" : "outline"}
                    onClick={() => {
                      setSelectedDropId(drop.id);
                      setTimeout(() => {
                        const element = document.getElementById('drop-title');
                        if (element) {
                          const yOffset = -150; // Отступ сверху для полной видимости заголовка
                          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className={`
                      ${selectedDropId === drop.id 
                        ? `bg-gradient-to-r ${textColors[index]} border-2 ${colors[index]}` 
                        : `${colors[index]} border-2 ${textColors[index]}`
                      }
                      transition-all duration-300 text-sm font-bold whitespace-nowrap flex-shrink-0
                    `}
                  >
                    Дроп {index + 1}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Drop Content */}
      <section id="drop-content" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Title */}
          <div id="drop-title" className="mb-12 text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-[#5ae0b3]">
              {selectedDrop.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#7dd3a7]">
              {selectedDrop.subtitle}
            </p>
          </div>

          {/* Concept */}
          <Card className="p-6 md:p-8 mb-8 border-2 border-[#5ae0b3] bg-card/50 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold mb-4 text-[#5ae0b3]">КОНЦЕПЦИЯ И ЛЕГЕНДА</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              {selectedDrop.concept}
            </p>
          </Card>

          {/* Visual Style */}
          <Card className="p-6 md:p-8 mb-8 border-2 border-[#7dd3a7] bg-card/50 animate-in fade-in duration-500 delay-100">
            <h3 className="text-2xl font-bold mb-6 text-[#7dd3a7]">ВИЗУАЛЬНЫЙ СТИЛЬ И КЛЮЧЕВЫЕ ЭЛЕМЕНТЫ</h3>
            
            <div className="space-y-6">
              {/* Vibe */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#5ae0b3]">Общий вайб</h4>
                <p className="text-base leading-relaxed text-foreground/90">
                  {selectedDrop.visualStyle.vibe}
                </p>
              </div>

              {/* Color Palette */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#5ae0b3]">Цветовая палитра</h4>
                <div className="space-y-2">
                  <p className="text-base text-foreground/90">
                    <span className="font-semibold">База:</span> {selectedDrop.visualStyle.colorPalette.base.join(", ")}
                  </p>
                  <div className="text-base text-foreground/90">
                    <span className="font-semibold">Акценты:</span>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      {selectedDrop.visualStyle.colorPalette.accents.map((accent, i) => (
                        <li key={i}>{accent}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-base text-foreground/90">
                    <span className="font-semibold">Применение:</span> {selectedDrop.visualStyle.colorPalette.application}
                  </p>
                </div>
              </div>

              {/* Prints */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#5ae0b3]">Принты и графика</h4>
                <p className="text-base leading-relaxed text-foreground/90">
                  {selectedDrop.visualStyle.prints}
                </p>
              </div>

              {/* Materials */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#5ae0b3]">Материалы и фактуры</h4>
                <p className="text-base leading-relaxed text-foreground/90">
                  {selectedDrop.visualStyle.materials}
                </p>
              </div>

              {/* Key Items */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#5ae0b3]">Ключевые вещи коллекции</h4>
                <ul className="list-disc list-inside space-y-1 text-base text-foreground/90">
                  {selectedDrop.visualStyle.keyItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Decor */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#5ae0b3]">Декор и функциональные элементы</h4>
                <p className="text-base leading-relaxed text-foreground/90">
                  {selectedDrop.visualStyle.decor}
                </p>
              </div>

              {/* Campaign */}
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#5ae0b3]">Настроение кампании</h4>
                <p className="text-base leading-relaxed text-foreground/90">
                  {selectedDrop.visualStyle.campaign}
                </p>
              </div>
            </div>
          </Card>



          {/* Team Role */}
          <Card className="p-6 md:p-8 mb-8 border-2 border-[#beadde] bg-card/50 animate-in fade-in duration-500 delay-200">
            <h3 className="text-2xl font-bold mb-4 text-[#beadde]">РОЛЬ КОМАНДЫ И ОСНОВАТЕЛЕЙ</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              {selectedDrop.teamRole}
            </p>
          </Card>

          {/* Warmup System */}
          <Card className="p-6 md:p-8 mb-8 border-2 border-[#5ae0b3] bg-card/50 animate-in fade-in duration-500 delay-300">
            <h3 className="text-2xl font-bold mb-4 text-[#5ae0b3]">СИСТЕМА ПРОГРЕВА ПО НЕДЕЛЯМ</h3>
            <p className="text-base leading-relaxed text-foreground/90 whitespace-pre-line">
              {selectedDrop.warmupSystem}
            </p>
          </Card>

          {/* Channels */}
          <Card className="p-6 md:p-8 mb-8 border-2 border-[#7dd3a7] bg-card/50 animate-in fade-in duration-500 delay-400">
            <h3 className="text-2xl font-bold mb-4 text-[#7dd3a7]">КАНАЛЫ И ФОРМАТЫ ПРОДВИЖЕНИЯ</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              {selectedDrop.channels}
            </p>
          </Card>

          {/* Mechanics (if exists) */}
          {selectedDrop.extraSection && (
            <Card className="p-6 md:p-8 mb-8 border-2 border-[#beadde] bg-card/50 animate-in fade-in duration-500 delay-500">
              <h3 className="text-2xl font-bold mb-6 text-[#beadde]">{selectedDrop.extraSection.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedDrop.extraSection.images.map((imagePath, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={imagePath} 
                      alt={`${selectedDrop.extraSection.title} - Фото ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {selectedDrop.extraSection2 && (
            <Card className="p-6 md:p-8 mb-8 border-2 border-[#beadde] bg-card/50 animate-in fade-in duration-500 delay-500">
              <h3 className="text-2xl font-bold mb-6 text-[#beadde]">{selectedDrop.extraSection2.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedDrop.extraSection2.images.map((imagePath, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={imagePath} 
                      alt={`${selectedDrop.extraSection2.title} - Фото ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {selectedDrop.extraSection3 && (
            <Card className="p-6 md:p-8 mb-8 border-2 border-[#7dd3a7] bg-card/50 animate-in fade-in duration-500 delay-500">
              <h3 className="text-2xl font-bold mb-6 text-[#7dd3a7]">{selectedDrop.extraSection3.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedDrop.extraSection3.images.map((imagePath, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={imagePath} 
                      alt={`${selectedDrop.extraSection3.title} - Фото ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {selectedDrop.mechanics && (
            <Card className="p-6 md:p-8 mb-8 border-2 border-[#beadde] bg-card/50 animate-in fade-in duration-500 delay-500">
              <h3 className="text-2xl font-bold mb-4 text-[#beadde]">МЕХАНИКИ ВОВЛЕЧЕНИЯ</h3>
              <p className="text-base leading-relaxed text-foreground/90">
                {selectedDrop.mechanics}
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 BLOCKRUN. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
