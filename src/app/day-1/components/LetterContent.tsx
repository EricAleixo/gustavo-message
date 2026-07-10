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
            J
          </span>
          úlia, bem-vinda ao primeiro dia de um dos momentos mais lindos da
          minha vida... E tenho certeza de que também será um dos mais
          lindos da sua também.
        </p>

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
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Highlight>
              <p className="font-body text-body-lg leading-relaxed text-on-surface-variant/85">
                Muhehehe!
              </p>
            </Highlight>
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
              src="/muhehehe.jpg"
              alt="Muhehehehe"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>

        <Paragraph>
          Acho que você deve ter chegado um pouquinho atrasada, né? Os
          padrinhos têm esse costume feio de sair tarde no primeiro dia...
          Não sei não, hein!
        </Paragraph>

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
              E aí, rodou bastante, piãozinho? Decorou todas as danças? Se não
              decorou, pode ir treinando, porque ainda vai dançar muito! Se eu
              fosse você, começava agora mesmo! Muhahahaha!
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
          &ldquo;Toma, toma, toma, biscoitinho...&rdquo; Me diz uma coisa:
          você comeu biscoito? Acho que você gosta, mas não sei se deu
          vontade na hora. Mas também tem bolo! Os lanches do primeiro dia
          são muito bons. Espero que você tenha aproveitado bastante!
        </Paragraph>

        <Paragraph>
          E aí, tinha muita gente? No meu EJC eram umas cinquenta e poucas
          pessoas. Imagino que o seu esteja mais ou menos assim também.
        </Paragraph>

        <Paragraph>
          Seus apresentadores são legais? Os meus eram simplesmente
          incríveis: muito divertidos e acolhedores! E pode acreditar: com
          o passar dos dias, eles conseguem ficar ainda melhores.
        </Paragraph>

        <Paragraph>
          E as músicas? Gostou? A bandinha anima todo mundo! Quando eles
          começam a tocar, parece impossível ficar parado.
        </Paragraph>

        <Paragraph>
          Vocês já conheceram as funções das equipes? Todas as pessoas que
          estão aí têm um único objetivo: <Highlight>servir você</Highlight>.
          Então, se precisar de qualquer coisa, não tenha vergonha de
          pedir ajuda.
        </Paragraph>

        <Paragraph>
          Você vai encontrar rostos conhecidos e outros nem tanto. E tem
          uma pessoa de quem eu gosto muito que costuma servir no EJC: Márcio. Ele animou demais o meu encontro! Só espero que ele
          esteja no trânsito... KAKAKAKAKAK! No meu EJC ele simplesmente
          pulou em cima do meu carro!
        </Paragraph>
      </LetterBlock>

      <SectionDivider />

      {/* Bloco 2 — branco — o início da parte mais séria */}
      <LetterBlock tone="white">
        <Paragraph>
          Júlia, quero ser breve, porque os momentos que você vai viver
          precisam ser <Highlight>vividos, e não contados</Highlight>.
        </Paragraph>

        <Paragraph>
          O EJC marcou a minha vida de uma forma que eu não consigo
          colocar em palavras. Eu gostaria de conseguir mostrar para você
          tudo o que vivi, mas sei que você está em boas mãos.
        </Paragraph>

        <Paragraph>
          Enquanto escrevo esta mensagem, lembro dos meus momentos: dos
          lanchinhos, da bandinha, dos apresentadores, da dedicação de
          cada servo, do pessoal do trânsito... Tudo isso ficou guardado
          no meu coração.
        </Paragraph>

        <Paragraph>
          Oh, Júlia, minha querida irmã, esses dias vão te lembrar de uma
          verdade muito importante:{' '}
          <Highlight>
            sempre, sempre, sempre vale a pena caminhar com Cristo
          </Highlight>
          .
        </Paragraph>
      </LetterBlock>

      <MidLetterEmphasis>
        Você é profundamente amada por Ele.
      </MidLetterEmphasis>

      {/* Bloco 3 — normal */}
      <div className="mt-stack-md">
        <LetterBlock tone="normal">
          <Paragraph>
            Foi por você que o nosso Pai entregou Seu Filho na cruz. Não
            será a bandinha, nem os apresentadores, nem o pessoal do
            trânsito, nem qualquer outra equipe que fará a diferença.
            Todos eles são apenas instrumentos.
          </Paragraph>

          <Paragraph>
            <Highlight>Quem vai ao seu encontro é o próprio Cristo</Highlight>
            . E, quando isso acontecer, você vai se sentir profundamente
            amada.
          </Paragraph>

          <Paragraph>
            Nunca podemos nos esquecer de como era estar perdidos e de
            como é maravilhoso sermos encontrados por Deus.
          </Paragraph>

          <Paragraph>
            Eu nunca vi Jesus em carne e osso. Mas, durante o meu EJC,
            senti Sua presença de uma forma muito especial. Foi como
            perceber que Ele estava ali, caminhando comigo e me
            lembrando, a todo instante, do quanto eu era amado.
          </Paragraph>

          <Paragraph>
            Espero, de todo coração, que você viva essa mesma experiência.
          </Paragraph>

          <Paragraph>
            E, se você estiver lendo esta mensagem hoje, durma cedo e
            descanse bem. Amanhã será mais um dia incrível. Aproveite
            cada segundo, porque passa muito rápido.
          </Paragraph>

          <Paragraph>
            Que Deus continue conduzindo cada passo seu durante esse
            encontro.
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
            Aliás! Deixei uma playlist com as músicas que marcaram meu EJC! Hoje, você vai poder ouvir algumas clickando lá no botãozinho acima, porém, amanhã quando você vir aqui, terá mais músicas! Vou ir liberando de acordo com os dias. (Junto com a carta do segundo dia, hehehe).
          </Paragraph>
        </LetterBlock>
      </div>
    </div>
  );
}
