'use client';

import { motion } from 'framer-motion';
import PullQuoteCard from './PullQuoteCard';
import SectionDivider from './SectionDivider';
import Highlight from './Highlight';
import MidLetterEmphasis from './MidLetterEmphasis';
import LetterBlock from './LetterBlock';
import Image from "next/image";

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

export default function LetterContent() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-margin-mobile pb-stack-xl sm:px-margin-desktop">
      {/* Bloco 1 — normal — a chegada, leve e brincalhona */}
      <LetterBlock tone="normal">
        <p className="font-body text-body-lg leading-relaxed text-on-surface-variant/85">
          <span className="float-left mr-2 font-display text-6xl font-bold leading-[0.8] text-primary">
            G
          </span>
          ustavo, se você está lendo essa mensagem, significa que deu tudo
          certo. Você deve ter concluído seu primeiro dia com êxito!
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Highlight>
            <p className="font-body text-body-lg leading-relaxed text-on-surface-variant/85">
              E aí, chegou atrasado por acaso? Imagino que sim, hahahahaha!
            </p>
          </Highlight>
        </motion.div>

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
              Rodou que nem um piãozinho? E as danças, já aprendeu todas? Se
              eu fosse você, já ia praticando. Vai que precisa pagar prenda
              depois... Muhahahaha!
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
              src="/muhahahaha.gif"
              alt="Muhahahaha"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>

        <Paragraph>
          Cara, é incrível como as coisas são engraçadas. Quem imaginaria que
          três dias podem mudar uma vida? Claro que é algo que você vai ver
          por conta própria, porque minhas palavras, escritas ou ditas, não
          vão dar conta. É algo sensorial, que precisa ser sentido e vivido.
        </Paragraph>

        <Paragraph>
          Nesses dias, você vai viver experiências únicas que,
          infelizmente, não se repetem. Mas, para sua felicidade, o seu
          momento de vivê-las é agora! Aproveite, esqueça os problemas e
          os medos, faça coisas novas, faça coisas velhas, viva bastante,
          tenha um ou mais propósitos, ame muito e seja gentil com quem
          está ao seu lado. É tudo novo para eles também.
        </Paragraph>

        <Paragraph>
          Ao escrever a carta de vocês, lembro o quanto foi mágico o meu
          Encontro de Jovens com Cristo: o pessoal do trânsito me tirando
          de dentro do carro e levando minhas coisas, os lanchinhos vindo
          animar o meu dia (comida, né?), os apresentadores sempre super
          animados, a boa vontade me levando toda hora pro banheiro,
          KAKAKAKKA. E ainda tem mais equipes que você vai conhecer.
        </Paragraph>
      </LetterBlock>

      <SectionDivider />

      {/* Bloco 2 — branco — a virada para o que realmente importa */}
      <LetterBlock tone="white">
        <Paragraph>
          Gustavo, esses momentos vão nos lembrar do que fazer quando
          pensarmos que estamos perdidos. Não porque realmente estejamos,
          mas porque nosso coração tem o costume de pregar peças na gente.
          Por isso, devemos sempre deixar o coração aberto para novas
          experiências: elas são passageiras demais. Erre muito, dance
          muito, grite muito, faça bons amigos e não deixe o que é
          importante para você escapar.
        </Paragraph>

        <Paragraph>
          E eu te digo: não será a bandinha, nem os apresentadores, nem o
          pessoal do trânsito, nem qualquer outra equipe, nem mesmo eu.{' '}
          <Highlight>
            Será Cristo quem vai olhar para você e fazer você quebrar todas
            as suas barreiras mais íntimas
          </Highlight>
          . E quando isso acontecer, você vai se sentir completamente
          amado.
        </Paragraph>
      </LetterBlock>

      <MidLetterEmphasis>
        Nunca se esqueça de como é estar perdido e ser encontrado.
      </MidLetterEmphasis>

      {/* Bloco 3 — normal */}
      <div className="mt-stack-md">
        <LetterBlock tone="normal">
          <Paragraph>
            Eu nunca vi Jesus em carne e osso, mas, quando vivi o EJC,
            senti a presença dEle mais forte perto de mim. E depois
            daqueles dias, nunca mais parei de sentir. Somos humanos,
            erramos e, ainda assim, somos amados. Não pelo que a gente é,
            mas por quem Deus é.
          </Paragraph>

          <Paragraph>
            Espero, de todo coração, que você viva essa mesma experiência.
          </Paragraph>

          <Paragraph>
            Se você estiver lendo esta mensagem hoje, durma cedo e
            descanse bem. Amanhã, com certeza, será incrível.
          </Paragraph>
        </LetterBlock>
      </div>

      <div className="mt-stack-md">
        <PullQuoteCard
          quote="Mas Deus demonstra o seu amor por nós: Cristo morreu em nosso favor quando ainda éramos pecadores."
          reference="Romanos 5:8"
        />
      </div>

      {/* Bloco 4 — branco — fechamento */}
      <div className="mt-stack-md">
        <LetterBlock tone="white">
          <Paragraph>
            Que, ao longo desses dias, você descubra cada vez mais esse
            amor, que não depende do que você faz, mas de{' '}
            <Highlight>quem Deus é</Highlight>. Que Cristo fale
            profundamente ao seu coração e que este EJC seja apenas o
            começo de uma caminhada cada vez mais próxima d&apos;Ele.
          </Paragraph>

          <Paragraph>
            Aliás, deixei uma playlist com as músicas que marcaram o meu
            EJC! Hoje, você já pode ouvir algumas clicando no botãozinho
            aí em cima. Amanhã, quando voltar aqui, terá mais músicas: vou
            liberando aos poucos, de acordo com os dias (junto com a carta
            do segundo dia, hehehe).
          </Paragraph>
        </LetterBlock>
      </div>
    </div>
  );
}