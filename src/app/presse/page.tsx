"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Article {
  id: number;
  titleAr: string;
  titleFr: string;
  subtitleAr: string;
  subtitleFr: string;
  contentAr: string;
  contentFr: string;
}

interface Speaker {
  id: number;
  nameAr: string;
  nameFr: string;
  bioAr: string;
  bioFr: string;
  session?: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    titleAr: "بدايات تفعيل مكتسبات القوة الناعمة",
    titleFr: "Les débuts de l'activation des acquis du Soft Power",
    subtitleAr: "نحو بناء سردية جزائرية",
    subtitleFr: "Vers la construction d'une narration algérienne",
    contentAr: `أنتج أستاذ العلاقات الدولية الأميركي الشهير جوزيف ناي عام 1990، مفهوم "القوة الناعمة"، الذي يعبر عن قدرة دولة ما على جعل الدول الأخرى تنجذب لنظامها الاجتماعي، والسياسي، والاقتصادي طوعا لا كرها، بالتأثير في الجماعات والأفراد، عن طريق الآداب والفنون، والمؤسسات الثقافية، والسمعة الحسنة للدولة والمجتمع، "أن تجعل الآخرين يريدون ما تريده أنت، متعاونين قانعين بلا إكراه أو إغراء".

الانفجار غير المسبوق في دور الوسائط المعلوماتية ومنصات التواصل الاجتماعي وحروب الجيل الرابع والخامس، يصنع مجتمعات افتراضية ورأيا عاماً عابرا للحدود، جاهزا للتفاعل مع التدفقات الإعلامية والفكرية والثقافية، في كل لحظة.

ولهذا، أخذت الجزائر بأسباب "القوة الناعمة"، بشكل ثابت وتصاعدي، منذ 2015، وتركز على السياسة الخارجية القائمة على الدفاع عن المصلحة الوطنية، في ساحة دولية شديدة التنافسية، إيمانا منها أن من يملك القوة الناعمة يكون حاضرًا في التأثير والاستقطاب، ومن الأوائل في صناعة القرار، في الداخل والخارج، وحول طاولات اتخاذ القرار الإقليمي والدولي.`,
    contentFr: `Le célèbre professeur américain des relations internationales Joseph Nye a produit en 1990 le concept de "Soft Power", qui exprime la capacité d'un État à attirer d'autres États vers son système social, politique et économique volontairement plutôt que par la force, en influençant les groupes et les individus par le biais de la littérature et des arts, des institutions culturelles et de la bonne réputation de l'État et de la société.

L'explosion sans précédent du rôle des médias d'information et des plateformes de médias sociaux et des guerres de quatrième et cinquième génération crée des communautés virtuelles et une opinion publique transfrontalière, prête à réagir aux flux médiatiques, intellectuels et culturels, à chaque instant.

C'est pourquoi l'Algérie a adopté les moyens du "Soft Power" de manière stable et croissante depuis 2015, en mettant l'accent sur une politique étrangère basée sur la défense de l'intérêt national, sur une scène internationale hautement compétitive, convaincue que celui qui possède le Soft Power est présent dans l'influence et l'attraction, et parmi les premiers dans la prise de décision, au niveau interne et externe, et autour des tables de négociation régionales et internationales.`,
  },
];

const SPEAKERS: Speaker[] = [
  {
    id: 1,
    nameAr: "مليكة بن دودة",
    nameFr: "Malika Bensaid",
    bioAr:
      "أستاذة وباحثة بجامعتي تيبازة ووهران سابقًا، وتشغل حاليًا منصب وزيرة الثقافة، حاصلة على دكتوراه في الفلسفة، وباحثة في الفلسفة السياسية، ولها إسهامات بحثية عديدة، وهي عضو في الشبكة الدولية للفيلسوفات التابعة لليونسكو وعضو المكتب الدولي لاتحاد جمعيات الفلسفة.",
    bioFr:
      "Professeure et chercheuse aux universités de Tiaret et d'Oran, elle occupe actuellement le poste de ministre de la Culture. Titulaire d'un doctorat en philosophie et chercheuse en philosophie politique, elle a contribué à plusieurs recherches scientifiques. Elle est membre du Réseau international des femmes philosophes de l'UNESCO et du Bureau international de la Fédération des associations de philosophie.",
  },
  {
    id: 2,
    nameAr: "زهير بوعمامة",
    nameFr: "Zoheir Bouamama",
    bioAr:
      "أستاذ جامعي وباحث في العلوم السياسية والعلاقات الدولية، حاصل على دكتوراه في التخصص، محلل سياسي له إسهامات علمية متعددة، شغل منصب مستشار لدى رئيس الجمهورية، ويشغل حاليًا منصب وزير الاتصال.",
    bioFr:
      "Professeur universitaire et chercheur en sciences politiques et relations internationales, titulaire d'un doctorat dans la spécialité. Analyste politique ayant contribué à plusieurs publications scientifiques. Il a occupé le poste de conseiller auprès du président de la République et occupe actuellement le poste de ministre de la Communication.",
  },
  {
    id: 3,
    nameAr: "حكيم باها",
    nameFr: "Hakim Baha",
    bioAr:
      "المدير العام لمجمع AGRIVIL ونائب رئيس CREA، هو رائد أعمال يعمل على تطوير القطاعين الزراعي والصناعات الغذائية، يساهم من خلالها بفعالية في تعزيز ريادة الأعمال ودعم الديناميكية الاقتصادية للجزائر.",
    bioFr:
      "Directeur général du groupe AGRIVIL et vice-président de CREA. Entrepreneur engagé dans le développement des secteurs agricole et agroalimentaire, contribuant efficacement à la promotion de l'entrepreneuriat et au soutien de la dynamique économique de l'Algérie.",
  },
  {
    id: 4,
    nameAr: "محمد بن جبور",
    nameFr: "Mohamed Benjedboura",
    bioAr:
      "خبير في الصناعات الإبداعية والثقافية، يتمتع بخبرة واسعة في إدارة المشاريع الثقافية والتعاون الدولي في مجالات السينما والفنون السمعية البصرية والقطاع الإبداعي. شغل مناصب قيادية في مؤسسات ثقافية كبرى، وعمل مستشارًا لهيئات ثقافية وحكومية في فرنسا والشرق الأوسط.",
    bioFr:
      "Expert en industries créatives et culturelles, jouissant d'une vaste expérience dans la gestion de projets culturels et la coopération internationale dans les domaines du cinéma, des arts audiovisuels et du secteur créatif. Il a occupé des postes de direction dans de grandes institutions culturelles et a travaillé comme consultant pour des organismes culturels et gouvernementaux en France et au Moyen-Orient.",
    session: "Jlsession1",
  },
  {
    id: 5,
    nameAr: "سفيان زرماني",
    nameFr: "Sofiane Zermani",
    bioAr:
      "فنان وممثل ومنتج، سفيان زرماني المعروف باسم فيانسو، بدأ مسيرته في الراب مطلع سنوات الألفية. حاز عدة أسطوانات بلاتينية، وهو أيضًا رائد أعمال ومؤسس علامة Affranchis Music التي ساهمت في بروز جيل جديد من الفنانين.",
    bioFr:
      "Artiste, acteur et producteur connu sous le nom de Fianso, il a commencé sa carrière dans le rap au début des années 2000. Titulaire de plusieurs disques de platine, il est également entrepreneur et fondateur du label Affranchis Music qui a contribué à l'émergence d'une nouvelle génération d'artistes.",
    session: "Jlsession1",
  },
  {
    id: 6,
    nameAr: "ياسين مدكور",
    nameFr: "Yassine Medkour",
    bioAr:
      "مؤسس ومدير شركة الإنتاج 2 Horloges، أحد الفاعلين البارزين في الصناعة السينمائية بالجزائر، أنتج العديد من الأفلام التي حازت على جوائز دولية. برز أيضا في الترويج للجزائر دوليًا وشارك في تنظيم Algeria Is Back.",
    bioFr:
      "Fondateur et directeur de la société de production 2 Horloges, acteur majeur de l'industrie cinématographique algérienne. Il a produit de nombreux films ayant remporté des prix internationaux et s'est distingué dans la promotion de l'Algérie à l'international, participant à l'organisation d'Algeria Is Back.",
    session: "Jlsession1",
  },
  {
    id: 7,
    nameAr: "طوني كيتوس",
    nameFr: "Tony Kitous",
    bioAr:
      "أحمد كيتوس المعروف باسم طوني كيتوس، هو مؤسس مجموعة Comptoir، مؤلف كتب طهي، ورائد أعمال في مجال المطاعم والمأكولات الشرق أوسطية وشمال أفريقية في لندن، حيث أسس سلسلة مطاعم Comptoir Libanais.",
    bioFr:
      "Ahmed Kitous, connu sous le nom de Tony Kitous, est fondateur du groupe Comptoir, auteur de livres de cuisine et entrepreneur dans le secteur de la restauration et des cuisines du Moyen-Orient et d'Afrique du Nord à Londres, où il a établi la chaîne de restaurants Comptoir Libanais.",
    session: "Jlsession2",
  },
  {
    id: 8,
    nameAr: "عدلان قديورة",
    nameFr: "Adlane Guedioura",
    bioAr:
      "لاعب دولي جزائري سابق، خاض تجربة احترافية مع عدة أندية أوروبية، وشارك في 63 مباراة مع المنتخب الوطني، وكان أحد أبرز وجوه التتويج بكأس أمم إفريقيا 2019.",
    bioFr:
      "Ancien joueur international algérien, il a eu une expérience professionnelle avec plusieurs clubs européens et a participé à 63 matchs avec l'équipe nationale. Il a été l'un des acteurs clés du sacre de la Coupe d'Afrique des Nations 2019.",
    session: "Jlsession2",
  },
];

export default function PressePage() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(1);
  const [selectedLang, setSelectedLang] = useState<"fr" | "ar">("fr");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#d4af37] italic">
            {selectedLang === "fr" ? "Presse" : "صحافة"}
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            {selectedLang === "fr"
              ? "Découvrez les articles et analyses sur le Soft Power algérien"
              : "اكتشف المقالات والتحليلات حول القوة الناعمة الجزائرية"}
          </p>

          {/* Language Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSelectedLang("fr")}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                selectedLang === "fr"
                  ? "bg-[#d4af37] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Français
            </button>
            <button
              onClick={() => setSelectedLang("ar")}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                selectedLang === "ar"
                  ? "bg-[#d4af37] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              العربية
            </button>
          </div>
        </div>

        {/* Articles Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif mb-12 text-[#d4af37]">
            {selectedLang === "fr" ? "Articles" : "المقالات"}
          </h2>

          <div className="space-y-6">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="border border-[#d4af37]/30 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-transparent hover:border-[#d4af37]/60 transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedArticle(
                      expandedArticle === article.id ? null : article.id,
                    )
                  }
                  className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-[#d4af37]">
                        {selectedLang === "fr"
                          ? article.titleFr
                          : article.titleAr}
                      </h3>
                      <p className="text-gray-400 italic">
                        {selectedLang === "fr"
                          ? article.subtitleFr
                          : article.subtitleAr}
                      </p>
                    </div>
                    <div className="text-[#d4af37] flex-shrink-0">
                      {expandedArticle === article.id ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>
                  </div>
                </button>

                {expandedArticle === article.id && (
                  <div className="px-6 pb-6 border-t border-[#d4af37]/20 pt-6">
                    <div
                      className={`text-gray-300 leading-relaxed space-y-4 ${
                        selectedLang === "ar" ? "text-right" : "text-left"
                      }`}
                      dir={selectedLang === "ar" ? "rtl" : "ltr"}
                    >
                      {(selectedLang === "fr"
                        ? article.contentFr
                        : article.contentAr
                      )
                        .split("\n\n")
                        .map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Speakers Section */}
        <section>
          <h2 className="text-3xl font-serif mb-12 text-[#d4af37]">
            {selectedLang === "fr" ? "Intervenants" : "المتحدثون"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {SPEAKERS.map((speaker) => (
              <div
                key={speaker.id}
                className="p-6 border border-[#d4af37]/30 rounded-lg bg-gradient-to-br from-white/5 to-transparent hover:border-[#d4af37]/60 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">
                  {selectedLang === "fr" ? speaker.nameFr : speaker.nameAr}
                </h3>
                {speaker.session && (
                  <div className="text-sm text-gray-400">
                    {selectedLang === "fr" ? speaker.session : speaker.session}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
