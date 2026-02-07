"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/useLocale";
import Image from "next/image";
import { X } from "lucide-react";

const GUESTS = [
  {
    id: 1,
    name: "Malika Bensaid",
    image: "/invités/bendouda-1.jpeg",
    bioFr:
      "Professeure et chercheuse aux universités de Tiaret et d'Oran, elle occupe actuellement le poste de ministre de la Culture. Titulaire d'un doctorat en philosophie et chercheuse en philosophie politique, elle a contribué à plusieurs recherches scientifiques. Elle est membre du Réseau international des femmes philosophes de l'UNESCO et du Bureau international de la Fédération des associations de philosophie.",
    bioAr:
      "أستاذة وباحثة بجامعتي تيبازة ووهران سابقًا، وتشغل حاليًا منصب وزيرة الثقافة، حاصلة على دكتوراه في الفلسفة، وباحثة في الفلسفة السياسية، ولها إسهامات بحثية عديدة، وهي عضو في الشبكة الدولية للفيلسوفات التابعة لليونسكو وعضو المكتب الدولي لاتحاد جمعيات الفلسفة.",
  },

  {
    id: 2,
    name: "Zoheir Bouamama",
    image: "/invités/Zoheir-Bouamama-800x502.jpg.jpeg",
    bioFr:
      "Professeur universitaire et chercheur en sciences politiques et relations internationales, titulaire d'un doctorat en spécialité. Analyste politique ayant contribué à plusieurs publications scientifiques. Il a occupé le poste de conseiller auprès du président de la République et occupe actuellement le poste de ministre de la Communication.",
    bioAr:
      "أستاذ جامعي وباحث في العلوم السياسية والعلاقات الدولية، حاصل على دكتوراه في التخصص، محلل سياسي له إسهامات علمية متعددة، شغل منصب مستشار لدى رئيس الجمهورية، ويشغل حاليًا منصب وزير الاتصال.",
  },

  {
    id: 3,
    name: "Hakim Baha",
    image: "/invités/HAKIM_BAHA.jpeg",
    bioFr:
      "Directeur général du groupe AGRIVIL et vice-président de CREA. Entrepreneur engagé dans le développement des secteurs agricole et agroalimentaire, contribuant efficacement à la promotion de l'entrepreneuriat et au soutien de la dynamique économique de l'Algérie.",
    bioAr:
      "المدير العام لمجمع AGRIVIL ونائب رئيس CREA، هو رائد أعمال يعمل على تطوير القطاعين الزراعي والصناعات الغذائية، يساهم من خلالها بفعالية في تعزيز ريادة الأعمال ودعم الديناميكية الاقتصادية للجزائر.",
  },

  {
    id: 4,
    name: "Mohamed Benjedboura",
    image: "/invités/Mohamed-Bendjebbour.jpeg",
    bioFr:
      "Expert en industries créatives et culturelles, jouissant d'une vaste expérience dans la gestion de projets culturels et la coopération internationale dans les domaines du cinéma, des arts audiovisuels et du secteur créatif. Il a occupé des postes de direction dans de grandes institutions culturelles et a travaillé comme consultant pour des organismes culturels et gouvernementaux en France et au Moyen-Orient, contribuant également à la formation et au renforcement des capacités dans l'économie des arts et les industries culturelles.",
    bioAr:
      "محمد بن جبور خبير في الصناعات الإبداعية والثقافية، يتمتع بخبرة واسعة في إدارة المشاريع الثقافية والتعاون الدولي في مجالات السينما والفنون السمعية البصرية والقطاع الإبداعي. شغل مناصب قيادية في مؤسسات ثقافية كبرى، وعمل مستشارًا لهيئات ثقافية وحكومية في فرنسا والشرق الأوسط، كما يساهم في التكوين وبناء القدرات في اقتصاديات الفن والصناعات الثقافية.",
  },

  {
    id: 5,
    name: "Sofiane Zermani",
    image: "/invités/Sofiane_Zermani_at_2025_Cannes_Photocall_1.jpg.jpeg",
    bioFr:
      "Artiste, acteur et producteur connu sous le nom de Fianso, il a commencé sa carrière dans le rap au début des années 2000. Titulaire de plusieurs disques de platine, il est également entrepreneur et fondateur du label Affranchis Music qui a contribué à l'émergence d'une nouvelle génération d'artistes.",
    bioAr:
      "فنان وممثل ومنتج، سفيان زرماني المعروف باسم فيانسو، بدأ مسيرته في الراب مطلع سنوات الألفية. حاز عدة أسطوانات بلاتينية، وهو أيضًا رائد أعمال ومؤسس علامة Affranchis Music التي ساهمت في بروز جيل جديد من الفنانين، من بينهم سولكينغ.",
  },

  {
    id: 6,
    name: "Yassine Medkour",
    image: "/invités/yacine medkour.jpeg",
    bioFr:
      "Fondateur et directeur de la société de production 2 Horloges, acteur majeur de l'industrie cinématographique algérienne. Il a produit de nombreux films ayant remporté des prix internationaux et s'est distingué dans la promotion de l'Algérie à l'international, participant à l'organisation d'Algeria Is Back, qui a marqué le retour de l'Algérie à la Village international du Festival de Cannes.",
    bioAr:
      "مؤسس ومدير شركة الإنتاج 2 Horloges، أحد الفاعلين البارزين في الصناعة السينمائية بالجزائر، أنتج العديد من الأفلام التي حازت على جوائز دولية، برز أيضا في الترويج للجزائر دوليًا. شارك في تنظيم Algeria Is Back، التي شهدت عودة الجزائر إلى القرية الدولية لمهرجان كان السينمائي.",
  },

  {
    id: 7,
    name: "Fayçal Sahbi",
    image: "/invités/Fayçal Sahbi.jpg",
    bioFr:
      "Expert en politiques culturelles et conseiller en stratégie culturelle, Fayçal Sahbi est professeur et chercheur universitaire en sciences de la communication et cinéma. Il a occupé plusieurs postes dans des festivals artistiques, notamment en tant que directeur artistique de RAI NATION et du Festival International du Cinéma de Timimoun.",
    bioAr:
      "خبير في السياسات الثقافية ومستشار في الاستراتيجية الثقافية، فيصل صحبي بروفيسور وباحث جامعي في علوم الاتصال والسينما، سبق له أن اشتغل عدة مناصب في مهرجانات فنية، حيث شغل منصب مدير فني لـ RAI NATION والمهرجان الدولي للسينما بتيميمون.",
  },

  {
    id: 8,
    name: "Mehdi Ben Issa",
    image: "/invités/mehdi benaissa.jpg.jpeg",
    bioFr:
      "Producteur et conseiller culturel, Mehdi Ben Issa est diplômé de l'école La Fémis à Paris. Il possède une expérience de plus de vingt ans dans les domaines du cinéma, de la télévision et des politiques culturelles, producteur du film 'L'Algérie vue d'en haut', actuellement conservateur du Festival algérien du film international.",
    bioAr:
      "منتج ومستشار ثقافي، مهدي بن عيسى، خريج مدرسة La Fémis بباريس. يمتلك خبرة تفوق عشرين عامًا في مجالات السينما والتلفزيون والسياسات الثقافية، منتج فيلم 'الجزائر من عل'، حاليا محافظ مهرجان الجزائر للفيلم الدولي.",
  },

  {
    id: 9,
    name: "Tony Kitous",
    image: "/invités/7213-TonyKitous.jpg.jpeg",
    bioFr:
      "Ahmed Kitous, connu sous le nom de Tony Kitous, est fondateur du groupe Comptoir, auteur de livres de cuisine et entrepreneur dans le secteur de la restauration et des cuisines du Moyen-Orient et d'Afrique du Nord à Londres, où il a établi la chaîne de restaurants Comptoir Libanais.",
    bioAr:
      "أحمد كيتوس المعروف باسم طوني كيتوس، هو مؤسس مجموعة Comptoir، مؤلف كتب طهي، ورائد أعمال في مجال المطاعم والمأكولات الشرق أوسطية وشمال أفريقية في لندن، حيث أسس سلسلة مطاعم Comptoir Libanais.",
  },

  {
    id: 10,
    name: "Beihdja Rahal",
    image: "/invités/573339384_1152428580340203_311716325976914959_n.jpg.jpeg",
    bioFr:
      "Artiste en musique classique. Elle a remporté en 2006 le prix Mahfouz Boussebsi en reconnaissance de ses recherches et efforts de préservation du patrimoine musical andalou. En 2008, le magazine Jeune Afrique l'a classée parmi les '50 personnalités qui font l'Algérie'.",
    bioAr:
      "فنانة في الموسيقى الكلاسيكية. حصلت في 2006 على جائزة محفوظ بوسيبسي تقديراً لأبحاثها وجهودها في حفظ التراث الموسيقي الأندلسي. وفي 2008، أدرجتها مجلة Jeune Afrique ضمن قائمة '50 شخصية تصنع الجزائر'.",
  },

  {
    id: 11,
    name: "Adlane Guedioura",
    image: "/invités/guedioura-civil-costume-watford.jpeg",
    bioFr:
      "Ancien joueur international algérien, il a eu une expérience professionnelle avec plusieurs clubs européens et a participé à 63 matchs avec l'équipe nationale. Il a été l'un des acteurs clés du sacre de la Coupe d'Afrique des Nations 2019.",
    bioAr:
      "عدلان قديورة لاعب دولي جزائري سابق، خاض تجربة احترافية مع عدة أندية أوروبية، وشارك في 63 مباراة مع المنتخب الوطني، وكان أحد أبرز وجوه التتويج بكأس أمم إفريقيا 2019.",
  },

  {
    id: 12,
    name: "Sofiane Lesage Berghout",
    image: "/invités/gFJLmG4C_400x400.jpg.jpeg",
    bioFr:
      "Fondateur de Riwaya Travel qui vise à promouvoir la position de l'Algérie comme destination touristique. Il dirige actuellement cette institution et gère une équipe de travail en Algérie et en France. Sofiane est titulaire d'une maîtrise en gestion de l'école ESCP Business School en 2022 et est intervenant dans plusieurs séminaires touristiques.",
    bioAr:
      "مؤسس Riwaya Travel التي تهدف إلى تعزيز مكانة الجزائر كوجهة سياحية. يقود حاليًا هذه المؤسسة ويدير فريق العمل في كل من الجزائر وفرنسا، سفيان متحصل على الماجستير في الإدارة من مدرسة ESCP للأعمال في 2022 وهو متحدث في العديد من الملتقيات السياحية.",
  },
];

export default function ParticipantsPage() {
  const [selectedGuest, setSelectedGuest] = useState(null);
  const lang = useLocale();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-[#d4af37]">
            Nos Invités
          </h1>
          <p className="text-gray-400 text-lg">
            Découvrez les personnalités qui enrichiront cette édition de
            l'Algerian Soft Power Day
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GUESTS.map((guest) => (
            <div
              key={guest.id}
              onClick={() => setSelectedGuest(guest)}
              className="group relative overflow-hidden rounded-lg border border-[#d4af37]/30 bg-gradient-to-br from-white/5 to-transparent hover:border-[#d4af37] transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-72 overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-black/80 group-hover:bg-black/60 transition-colors">
                <h3 className="font-bold text-lg text-[#d4af37] group-hover:text-white transition-colors">
                  {guest.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Cliquez pour plus d'infos
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Modal/Popup */}
      {selectedGuest && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-[#d4af37]/30 bg-[#0a0a0a]">
              <h2 className="text-3xl font-serif text-[#d4af37]">
                {selectedGuest.name}
              </h2>
              <button
                onClick={() => setSelectedGuest(null)}
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-6">
              <div className="relative w-full h-96 overflow-hidden rounded-lg mb-6 bg-black flex items-center justify-center">
                <Image
                  src={selectedGuest.image}
                  alt={selectedGuest.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">
                    Biographie
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {lang === "ar"
                      ? selectedGuest.bioAr ||
                        selectedGuest.bioFr ||
                        selectedGuest.bio
                      : selectedGuest.bioFr || selectedGuest.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
