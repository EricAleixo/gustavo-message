'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PullQuoteCard from './PullQuoteCard';
import SectionDivider from './SectionDivider';
import Highlight from './Highlight';
import MidLetterEmphasis from './MidLetterEmphasis';
import LetterBlock from './LetterBlock';

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

// Bloco reutilizável de texto + meme, no mesmo estilo do Dia 1
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
      {/* Bloco 1 — normal — segundo dia, leve e cheio de perguntas */}
      <LetterBlock tone="normal">
        <p className="font-body text-body-lg leading-relaxed text-on-surface-variant/85">
          <span className="float-left mr-2 font-display text-6xl font-bold leading-[0.8] text-primary">
            O
          </span>
          pa Gustavo!!!! Segundo dia, cara! Eae? Tú deve ter se acabado no
          almoço, hein. Tá comendo bem visse bicho, é muito bom a comida,
          hahahaha.
        </p>

        <TextWithMeme
          imageSrc="/meme-cochilo.png"
          imageAlt="Meme sobre cochilar na palestra"
        >
          Cara, imagino que nas palestras você tenha dormido dessa maneira:
        </TextWithMeme>

        <Paragraph>
          Círculo branco, correto? Tô curioso pro nome, gostou das pessoas?
          Digo, é algo que você vai conhecendo melhor.
        </Paragraph>

        <Paragraph>
          Você pode escrever cartas, deixe preparada um dia antes.
          Infelizmente não consegui fazer quando eu fiz (dormi direto), então
          a chance de você tá lendo essa aqui quando já tiver acabado é
          enorme. Espero que tenha escrito algo mesmo assim.
        </Paragraph>

        <Paragraph>
          E então? Tá matando sua curiosidade? Cada momento é significativo,
          aproveite mesmo: as palestras, os lanches, a boa vontade (as
          pessoas que te levam pro banheiro), o trânsito, a bandinha e as
          equipes que você vai conhecer. Aliás, acredito que você tenha
          notado que acontece muita coisa &ldquo;estranha&rdquo; por aí,
          hehehehehe. Acontece também que há equipes trabalhando sem ver, ou
          sem receber créditos por isso. Acredite, é realmente um trabalho
          muito forte. Talvez você nunca veja eles, mas eles fizeram
          diferença na sua vida. Afinal, cada um dali está com o propósito de
          te servir. Cada um passou pelo que você está passando e, assim como
          eu, deseja que você tenha uma experiência tão boa quanto a deles.
        </Paragraph>

        <Paragraph>
          E então? O pessoal de Hollywood (os atores do trânsito) não são
          massas? Estou ansioso pra ver novamente as peças. Mas sim, são as
          mesmas peças, não me lembro de todas, mas tem momentos muito, mas
          muito bons! E bota engraçado, KAKAKAKAKAKK. Depois te conto. Os
          lanchinhos também não ficam pra trás, é muito engraçado as pequenas
          peças que eles fazem também. Se Hollywood soubesse o talento...
          rapaz. Não vou contar o que acontece, pois você pode não ter vivido
          ainda. Mas cara, tem uma cena que acho que você vai rir muito. Se
          for igual o meu EJC, acredito que seja amanhã. Espero muito, de
          verdade, que seja! HAHAHAHAHAHAHA
        </Paragraph>

        <Paragraph>
          Bem, deixando as risadas um pouco de lado: e então, sei que é um
          dia cansativo, mas aprendeu alguma coisa boa? As palestras, as
          pessoas?
        </Paragraph>
      </LetterBlock>

      <SectionDivider />

      {/* Bloco 2 — branco — o deserto e o sacrifício de Cristo */}
      <LetterBlock tone="white">
        <Paragraph>
          E hoje escrevo essa carta pois sei que foi o dia que quebrou uma
          das minhas barreiras para Cristo. E o deserto, como foi? O deserto
          é a simulação do que Cristo passou: do seu caminhar, do seu viver e
          do seu morrer. Imagine viver em um mundo onde você veio para
          salvá-lo e ser crucificado. Sabia que é isso que é um sacrifício?
          O puro se sacrifica pelo sujo e assim Jesus fez por nós.
        </Paragraph>

        <Paragraph>
          Antes da execução, Jesus foi submetido à flagelação romana, um
          castigo extremamente violento. Os soldados usaram um <Highlight>flagrum</Highlight>, um
          chicote com várias tiras de couro cujas pontas tinham pequenos
          pedaços de osso, metal ou chumbo. Cada golpe rasgava a pele e podia
          atingir músculos e tecidos profundos, causando intensa perda de
          sangue, dores fortes e um estado de extrema fraqueza. Muitos
          condenados morriam só nessa etapa, pelo choque dos ferimentos.
        </Paragraph>

        <TextWithMeme
          imageSrc="/flagrum.jpg"
          imageAlt="flagrum"
        >
          Depois do açoite, os soldados ainda zombaram dele, vestindo um
          manto e colocando na cabeça uma coroa feita de espinhos, chamando
          ele ironicamente de &ldquo;Rei dos Judeus&rdquo;. Aqui está a flagrum, arma usada para torturar Cristo:
        </TextWithMeme>

        <Paragraph>
          E, bem, você viu, sentiu e ouviu como foi cada momento em que Ele,
          nosso Pai, viveu. E isso, Gustavo, é o preço de ser o homem mais
          homem do mundo. Não foi com destruição, sendo que ele poderia ter
          feito isso num estalar de dedos. Não! Jesus, mesmo sendo Deus, se
          fez homem. Ele sentia como nós, chorava como nós, o sangue dele era
          vermelho, como o nosso. Mas mesmo assim, ele fez. Pois o amor dele
          é tão grande que colocou sua vida e sua dor para nos libertar.
        </Paragraph>
      </LetterBlock>

      <MidLetterEmphasis>
        Mesmo sendo Deus, ele chorava como nós. O sangue dele era vermelho,
        como o nosso.
      </MidLetterEmphasis>

      {/* Bloco 3 — normal — a ressurreição e o amor como caminho */}
      <div className="mt-stack-md">
        <LetterBlock tone="normal">
          <Paragraph>
            Vou te contar algo que talvez você não saiba: a morte de Cristo
            foi a nossa salvação, pois só temos a chance da vida eterna
            graças a ele. Com sua ressurreição, ele desceu à mansão dos
            mortos (também conhecida como Hades, o lugar onde iam as almas),
            e os justos que estavam lá, Abraão, Moisés, Davi, os profetas,
            conseguiram a vida eterna e subiram com Deus Filho rumo ao
            encontro de Deus Pai.
          </Paragraph>

          <Paragraph>
            <Highlight>O amor é o único caminho</Highlight>. Se morrermos,
            morremos por Cristo. Se vivermos, viveremos por Cristo. Vivendo
            ou morrendo, seremos de Cristo. Pois, nesse mundo:{' '}
            <Highlight>viver é Cristo, morrer é lucro</Highlight>. Continue
            sendo gentil e ame, ame mais, muito mais! Estamos aprendendo a
            amar, e sempre aprenderemos isso.
          </Paragraph>

          <Paragraph>
            Escolhi &ldquo;Isaías 53&rdquo; como música, pois achei que
            combinaria com esse momento. Escute bem, por favor.
          </Paragraph>
        </LetterBlock>
      </div>

      <div className="mt-stack-md">
        <PullQuoteCard
          quote="Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados."
          reference="Isaías 53:5"
        />
      </div>

      {/* Bloco 4 — branco — fechamento com a imagem da cruz */}
      <div className="mt-stack-md">
        <LetterBlock tone="white">
          <Paragraph>
            Termino por aqui. Hahaha, longo, né? Mas lembre-se:
          </Paragraph>

          <motion.div
            className="flex justify-center py-stack-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Image
              className="rounded-2xl"
              src="/cruz.png"
              alt="Cruz"
              width={320}
              height={320}
            />
          </motion.div>

          <Paragraph>
            Olhe no player, tem mais músicas disponíveis hoje! Bom resto de
            encontro, e como eu disse, aproveite, cara!{' '}
            <Highlight>
              Cristo está com você todo dia, mas está usando seus
              instrumentos pra você se dar conta disso.
            </Highlight>
          </Paragraph>

          <Paragraph>
            Até depois! Nos vemos por aqui no terceiro dia!
          </Paragraph>
        </LetterBlock>
      </div>
    </div>
  );
}