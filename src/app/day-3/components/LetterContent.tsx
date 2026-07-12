'use client';

import { motion } from 'framer-motion';
import PullQuoteCard from './PullQuoteCard';
import SectionDivider from './SectionDivider';
import Highlight from './Highlight';
import MidLetterEmphasis from './MidLetterEmphasis';
import LetterBlock from './LetterBlock';
import Image from 'next/image';

const paragraphVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={paragraphVariants}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="font-body text-body-lg leading-relaxed text-on-surface-variant/85"
    >
      {children}
    </motion.p>
  );
}

function TextWithMeme({
  children,
  imageSrc,
  imageAlt,
}: {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.35, delayChildren: 0.1 },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="font-body text-body-lg leading-relaxed text-on-surface-variant/85">
          {children}
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.85, y: 24 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Image
          className="rounded-2xl"
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
        />
      </motion.div>
    </motion.div>
  );
}


export default function LetterContent() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-margin-mobile pb-stack-xl sm:px-margin-desktop">
      {/* Bloco 1 — normal — chegada em casa, fim dos três dias */}
      <LetterBlock tone="normal">
        <p className="font-body text-body-lg leading-relaxed text-on-surface-variant/85">
          <span className="float-left mr-2 font-display text-6xl font-bold leading-[0.8] text-primary">
            B
          </span>
          <Highlight>EM-VINDO À FAMÍLIA, GUSTAVO!!!</Highlight>{' '}
          Meu irmão de quarto, de brincadeiras, de estudo e agora, de Cristo (você sempre foi, mas talvez não tenha ciência disso). Depois de agora, a sua vida ainda vai continuar mudando, pode ter certeza disso, hahahahaha!
        </p>

        <Paragraph>
          Não é só o seu círculo, ou a Santo Antônio: todo mundo no mundo é seu irmão. Porém, aqueles que viveram o que você acabou de viver têm plena ciência disso. Por isso se chama família EJC.
        </Paragraph>

        <TextWithMeme
          imageSrc="/gatinho.webp"
          imageAlt="Meme sobre cochilar na palestra"
        >
          E então? Infelizmente, acabou...
        </TextWithMeme>

        <Paragraph>
          Mas vamos ver os frutos desses dias, o que achou? Superou as expectativas, atingiu, esperava mais? Não querendo ser presunçoso, mas acho que já sei a resposta, hahaha!
        </Paragraph>

        <Paragraph>
          E aí, tô curioso: vocês também tiveram a cena do Chapolin correndo atrás do lobo? Cara, que cena boa, eu ri muito, muito mesmo. E quando o pessoal dos lanchinhos entrou em greve e foi jogar truco? Não sei se essas coisas se repetem em todo EJC do mesmo jeito, mas a gente conversa tomando um café e vê as diferenças e as igualdades.
        </Paragraph>

        <Paragraph>
          Só tenho certeza de algumas coisas, tipo... e aí, como foi pegar a carta da sua família debaixo da cadeira?
        </Paragraph>
      </LetterBlock>

      <SectionDivider />

      {/* Bloco 2 — branco — a história pessoal do Eric */}
      <LetterBlock tone="white">
        <Paragraph>
          No meu círculo, eu tinha falado: "Às vezes não sabemos se nossos pais nos amam mesmo, é uma dúvida, por mais que já saibamos a resposta." Manu olhou para Rodrigo (meu pai de círculo) e os dois começaram a chorar enquanto nos instruíam a pegar a carta. Meu coração tremeu ao tocar nela, e ao abrir e ler: "Eric, meu presente de Deus".
        </Paragraph>

        <Paragraph>
          Sobraram apenas pedaços dele, o que me fez crer que sou amado dia após dia e simplesmente não via isso. E então essa música que tocava ao fundo começou a fazer sentido: "Percebe e entende que os melhores amigos são aqueles que estão em casa, esperando por ti..."
        </Paragraph>

        <Paragraph>
          Gustavo, foi assim para a minha família. E para você, espero que sirva para aumentar ainda mais esses casos. E sempre: "Se por acaso a dor chegar, ao seu lado sempre vão estar, para te acolher e te amparar..." E faço das palavras dessa linda canção as minhas: volte para a sua família, sempre, não só hoje, mas sempre que puder, ou simplesmente quando der vontade.
        </Paragraph>
      </LetterBlock>

      <MidLetterEmphasis>
        Deus não é ilusão. Ele viu cada passo dado e fez acontecer justamente para você, para cada pessoa, em cada momento.
      </MidLetterEmphasis>

      {/* Bloco 3 — normal — álbum da família e caminhada de velas */}
      <div className="mt-stack-md">
        <LetterBlock tone="normal">
          <Paragraph>
            Entenda que não há nada como um lar, não é mesmo? Hahahaha. Ao andar pelo caminho com todo mundo com as velas acesas, parecia que Cristo tinha guiado meu caminho, passo a passo. Aquelas luzes iluminavam meu caminho, e eram pessoas que as acendiam. Pessoas em quem, estranhamente, senti a sensação de aconchego, por mais que o tempo tenha sido tão curto.
          </Paragraph>

          <Paragraph>
            Me fala, como foi o teu álbum da família? Ah, Gustavo, imagine ter um dia cansativo, em que as coisas não parecem fazer sentido, e simplesmente abrir aquele álbum e ver todas as suas dúvidas sendo sanadas. É uma benção. E aí, teve uma festa boa por aí? Abraçou sua mãe, seu pai e seu irmão bem forte? Imagino que sim.
          </Paragraph>
        </LetterBlock>
      </div>

      <div className="mt-stack-md">
        <PullQuoteCard
          quote="Se por acaso a dor chegar, ao teu lado vão estar, pra te acolher e te amparar... pois não há nada como um lar!"
        />
      </div>

      {/* Bloco 4 — branco — fechamento, boas-vindas definitivas */}
      <div className="mt-stack-md">
        <LetterBlock tone="white">
          <Paragraph>
            E então, Gustavo, é isso: é o fim desses três dias, mas o começo de uma nova vida. Hehehehehe, agora que você é da família EJC vai poder participar dos eventos que tem! Eles servem para reviver esses dias, e você é um cara sortudo: o Vivo EJC em Bananeiras está prometido para esse ano. Te vejo lá, hein.
          </Paragraph>

          <Paragraph>
            Sentiu a vontade de servir em algo? Caso não tenha sentido, relaxe, tem muito mais ainda.
          </Paragraph>

          <Paragraph>
            Então finalizo minha carta: <Highlight>BEM-VINDO NOVAMENTE, GUSTAVO!</Highlight> Obrigado pelo seu "sim" e por ter vivido esses momentos que mudaram a minha vida e ainda continuam a transformá-la, toda vez que abro meu coração para isso. Viva a Cristo, viva a santidade! Os jovens querem ser santos, os jovens querem a verdade! A salvação é individual, mas rezarei todos os dias para que você alcance a sua. Hei de te ver em uma nova vida, pois, embora estejamos na carne, não militamos segundo ela.
          </Paragraph>
        </LetterBlock>
      </div>

      <div className="mt-stack-md">
        <PullQuoteCard
          quote="Pois, se morrermos, morremos por Cristo, e se vivermos, viveremos por Cristo. Vivendo ou morrendo, seremos de Cristo. Viver é Cristo, morrer é lucro."
          reference="Filipenses 1:21"
        />
      </div>

      {/* Bloco 5 — normal — despedida final */}
      <div className="mt-stack-md">
        <LetterBlock tone="normal">
          <Paragraph>
            Pode ir entrando e se aconchegando, pode demorar um pouquinho, mas com o tempo vai ficando natural. Apresente esse lado da igreja para as pessoas que ainda não conhecem.
          </Paragraph>

          <Paragraph>
            Você é especial, uma pessoa gentil, com princípios e força. Ame as pessoas, seja gentil ao ponto de incentivá-las a amar mais. Faça boas companhias e, acima de tudo: <Highlight>seja feliz!</Highlight>
          </Paragraph>

          <Paragraph>
            Feliz Encontro de Jovens com Cristo, em Cristo e por Cristo, Gustavo! Espero que Deus me permita servir ao seu lado em algum momento. Você é amado infinitamente vezes o infinito. Desejo a você um excelente resto de dia, não, de vida! Aproveite as novas músicas e até depois. Mostra a camisa do encontro quando puder!
          </Paragraph>
        </LetterBlock>
      </div>
    </div>
  );
}