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
          <Highlight>EM-VINDA À FAMÍLIA EJC, JÚLIA!!!</Highlight>{' '}
          Se você tiver vendo essa carta, significa que já está em casa.
        </p>

        <TextWithMeme
          imageSrc="/gatinho.webp"
          imageAlt="Meme sobre cochilar na palestra"
        >
          E os três dias acabaram... Triste, né?
        </TextWithMeme>

        <Paragraph>
          Então, acabou. Meses de espera pra só três dias, hahaha. Mas
          e aí, o que você aprendeu nesses três dias? Quem você
          conheceu, o que você viu... Valeu a pena?
        </Paragraph>

        <Paragraph>
          Imagino como deve ter sido a sua reação ao tirar a carta da
          sua família debaixo da cadeira, o corredor de velas, o álbum
          da sua família... Esses momentos são, inegavelmente, <Highlight>lindos. </Highlight>
          Tudo o que fizemos faz sentido no momento em que nos lembram
          disso: que somos, sim, amados.
        </Paragraph>
      </LetterBlock>

      <SectionDivider />

      {/* Bloco 2 — branco — a história pessoal do Eric */}
      <LetterBlock tone="white">
        <Paragraph>
          Quando fiz meu EJC, foi justamente essa a minha pergunta: “Às
          vezes, sentimos que não somos amados pelos nossos pais.” Em
          seguida, Manu e Rodrigo (meus pais de círculo) começaram a
          chorar e a explicar o que devemos fazer. Ao pegar aquela
          carta, meu coração gelou. E ao ler a primeira frase — &ldquo;Eric,
          meu presente de Deus...&rdquo; — meu coração desabou em mil
          pedaços. Apesar das brigas, dos desentendimentos, eu sou, sim,
          amado. E o EJC serviu pra unir a minha família, muito, mas
          muito mais. Ao olhar pro lado, vi muitas pessoas chorando e se
          abraçando. Pois o mesmo sentimento que eu senti, todo mundo
          sentiu.
        </Paragraph>

        <Paragraph>
          E tenho certeza que você também. Nós somos amados, e temos um
          Pai que, por mais que não o entendamos, temos que ter a
          certeza de que cada milímetro dos nossos passos está sendo
          guiado. E isso se chama fé, você não nasce com ela, como
          muita gente pensa; você a adquire através da experiência
          vivida.
        </Paragraph>
      </LetterBlock>

      <MidLetterEmphasis>
        Deus simplesmente te ama infinitamente, pois não é sobre quem
        você é, mas sim sobre quem Ele é.
      </MidLetterEmphasis>

      {/* Bloco 3 — normal — álbum da família e caminhada de velas */}
      <div className="mt-stack-md">
        <LetterBlock tone="normal">
          <Paragraph>
            E quando abrimos o álbum da nossa família e vimos nossas
            fotos, ah, Júlia, esses momentos, um dia, vão nos salvar
            quando parecermos estar perdidos. Andaremos na rua e
            encontraremos pessoas que nos serviram e lembraremos como nos
            sentimos, e usaremos esse sentimento em novas pessoas!
          </Paragraph>

          <Paragraph>
            E o caminhar de velas? Os passos em direção a uma nova vida,
            uma vida em que o caminho é escuro, mas há pessoas para
            iluminar cada passo. E essas pessoas estão dentro da nossa
            casa.
          </Paragraph>
        </LetterBlock>
      </div>

      <div className="mt-stack-md">
        <PullQuoteCard
          quote="Percebe e entende que os melhores amigos são aqueles que estão em casa, esperando por ti..."
        />
      </div>

      {/* Bloco 4 — branco — fechamento, boas-vindas definitivas */}
      <div className="mt-stack-md">
        <LetterBlock tone="white">
          <Paragraph>
            Júlia, todo mundo que te conhece te ama. Só que, às vezes,
            estamos tão ocupados com a monotonia e a correria do dia a
            dia que nos esquecemos de demonstrar isso. Claro que isso não
            é pra ser normalizado, e o Encontro de Jovens (com Cristo, em
            Cristo, por Cristo) serve pra lembrar até as nossas famílias
            do quão especiais somos.
          </Paragraph>

          <Paragraph>
            Então... finalizo a minha carta (3 dias já) com: <Highlight>SEJA
            BEM-VINDA A ESSE MUNDO</Highlight>, que transformou minha vida e
            continua a transformá-la a cada vez que abro meu coração pra
            isso. Obrigado pelo seu &ldquo;sim&rdquo;. Não acabou, ainda tem
            muito, muito mais pela frente!
          </Paragraph>

          <Paragraph>
            Diga sim, Júlia. Sempre diga sim às novas experiências que
            foram feitas pra você! A santidade é real, a juventude quer
            ser santa! A salvação é individual, mas não deixarei de rezar
            por ti a caminho de uma vida com Deus. Hei de te ver em uma
            nova vida.
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
            Obrigado por ter aceitado esse convite especial! Seja
            bem-vinda novamente: vai entrando e se aconchegando. Pode até
            demorar um pouquinho, mas pouco a pouco vai se tornando
            natural. Nos veremos nos retiros, tem retiros de EJC que
            servem pra revivermos esses 3 dias. Por sua sorte, acredito
            que o <Highlight>VIVO EJC</Highlight> Bananeiras seja esse ano, bora, quando for
            divulgado (fica de olho no grupo do EJC que colocam lá).
          </Paragraph>

          <Paragraph>
            Você é especial: luz, energia, gentileza e calor. Conquiste
            tudo que puder, ame as pessoas, seja gentil, faça seu trabalho
            da melhor forma, nunca desacredite em você, ame sua família e,
            acima de tudo: <Highlight>seja feliz!</Highlight>
          </Paragraph>

          <Paragraph>
            Feliz EJC, minha irmã de monitoria, de curso, de vida e de
            Cristo (sempre foi, mas agora com ciência disso). Infelizmente,
            não somos irmãos de círculo, mas vai que um dia a gente serve
            junto no mesmo trabalho, então seremos irmãos de trabalho!
            (Nem sei se existe, mas se não existir, vou criar!) Tenha um
            resto de dia, não, de vida, excelente! Até mais tarde. Mostra a
            camisa do encontro depois!
          </Paragraph>
        </LetterBlock>
      </div>
    </div>
  );
}