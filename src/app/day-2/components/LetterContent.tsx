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
          i, Júlia! E aí, como está sendo o segundo dia? Espero que você não
          tenha cochilado em nenhuma palestra... Não que eu esteja
          insinuando nada, hein.
        </p>

        <TextWithMeme
          imageSrc="/meme-cochilo.png"
          imageAlt="Meme sobre cochilar na palestra"
        >
          Pois adivinha quem dormiu... hehehehehehe!
        </TextWithMeme>

        <Paragraph>
          Círculo rosa, né? Qual foi o nome que vocês escolheram? Só não
          vale &ldquo;Rosas de Maria&rdquo; — esse já tá batido, viu?
          Desenharam algum símbolo pro círculo? E como foi a apresentação
          de vocês? Desculpa a enxurrada de perguntas, mas é que dá muita
          vontade de saber tudo. Pode responder depois, com calma.
        </Paragraph>

        <Paragraph>
          Gostou do pessoal do Hollywood? Eles atuam muito bem, né? E o
          trânsito, como sempre, sendo incrível. Ah, e o almoço? Só de
          pensar já me dá vontade de rir. O pessoal da Boa Vontade te
          serviu bem? Se você está com pedra nos rins, deve ter ido um
          bocado ao banheiro (eu imagino). No meu EJC eu estava muito
          apertado, e a equipe ainda fazia brincadeira — quase me fez
          passar vergonha, mas foi uma piada tão boa que guardei com
          carinho até hoje. E o pessoal dos lanchinhos? Sempre engraçados,
          as cenas deles eram impagáveis.
        </Paragraph>

        <Paragraph>
          Gostou dos Correios? Eles vivem mudando de lugar do nada — isso
          me tirava do sério —, mas sempre entregam as cartas certinho. Você
          já deve ter recebido um bocado. E, já que estamos falando nisso:
          você também pode escrever! Separa um tempinho hoje e deixa uma
          carta pronta pra amanhã. É só avisar: <Highlight>&ldquo;Aqui tem carta&rdquo;</Highlight>,
          que o Correio já vem buscar.
        </Paragraph>

        <Paragraph>
          Comprou algum broche? Eu nunca consegui um no meu ano, mas prometo
          que ainda vou comprar o meu.
        </Paragraph>

        <Paragraph>
          Está aproveitando cada momento? Passa rápido, viu — já é o
          segundo dia, e amanhã é o último desses três. O fim dessa noite
          mexeu muito comigo no meu EJC.
        </Paragraph>
      </LetterBlock>

      <SectionDivider />

      {/* Bloco 2 — branco — a Via Sacra e o peso do sacrifício */}
      <LetterBlock tone="white">
        <Paragraph>
          Imagina só: andar como Cristo andou. Pedras, espinhos, gritos,
          ódio. Tantos ferimentos — e por quê? Por que o justo precisou se
          sacrificar pelos injustos? Por que o puro precisou se sujar no
          lugar de quem estava sujo? Por que o amor foi tratado com tanto
          desprezo?
        </Paragraph>

        <Paragraph>
          A única resposta que me vem à mente é: <Highlight>por nós</Highlight>.
        </Paragraph>

        <Paragraph>
          Jesus nos ama independentemente do que fazemos. Para Ele, somos
          plenamente amados e inteiros. Tudo o que você está vivendo esses
          dias não é um acaso — foi pensado especialmente para você.
        </Paragraph>
      </LetterBlock>

      <MidLetterEmphasis>
        Cristo está olhando para você, agora mesmo. Você nunca esteve
        sozinha.
      </MidLetterEmphasis>

      {/* Bloco 3 — normal */}
      <div className="mt-stack-md">
        <LetterBlock tone="normal">
          <Paragraph>
            Mesmo estando num círculo diferente do círculo de Gustavo,
            saiba que isso não muda nada: Cristo enxerga você do mesmo jeito,
            com o mesmo amor. Ele morreu por você. Por isso, te peço, como
            irmão, como amigo e como pessoa: ame aquilo que Cristo defendeu.
          </Paragraph>

          <Paragraph>
            Esse mundo, muitas vezes, esquece o que é o amor de verdade.
            Mas, se Cristo não desistiu de nós, por que desistiríamos do
            mundo? <Highlight>O amor é o único caminho</Highlight> e esse
            caminho começa com você. Ame mais, seja mais gentil, abrace
            mais, converse mais. Faça hoje aquilo que normalmente você não
            faria. Você é a melhor versão de si mesma, filha de um Rei.
          </Paragraph>

          <Paragraph>
            Escolhi uma música especial para esse momento, porque ela
            resume exatamente o que eu queria te dizer agora: se entregue,
            e peça um coração semelhante ao de Cristo.
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
            Você não sairá daqui conhecida como Santa Maria Júlia de
            Guarabira — mas vai sair com um redirecionamento real rumo à
            santidade. E isso é possível, sim. Depende da nossa batalha,
            dia após dia. Ao olhar para aquela cruz, perceba que ela não é
            um peso impossível de carregar, mas um caminho totalmente
            alcançável.
          </Paragraph>

          {/* Imagem da cruz — troque "cruz.jpg" pelo arquivo real em public/ */}
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
            Amanhã será um grande dia, o fim dessa jornada. Se prepare,
            porque vai ser especial e único. E, até lá, se quiser orar,
            entregue ao Senhor exatamente o que você está sentindo agora,
            com suas próprias palavras. Peça, sinceramente, por um coração
            cada vez mais parecido com o d&apos;Ele.
          </Paragraph>

          <Paragraph>
            Bem, até amanhã! Apareceram mais músicas na playlist, escute
            agora ou quando se sentir mais à vontade. Tem duas em especial
            que são lindíssimas: <Highlight>&ldquo;Enquanto Eu Te
            Adoro&rdquo;</Highlight> e{' '}
            <Highlight>&ldquo;Jesus, Meu Esposo&rdquo;</Highlight>.
          </Paragraph>

          <Paragraph>
            Faça bastante amizade no seu círculo, viu? Bons sonhos e boa
            noite, Júlia!
          </Paragraph>
        </LetterBlock>
      </div>
    </div>
  );
}