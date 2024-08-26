import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Recor Manager',
        description: "O Recor Manager é um sistema feito para criar salas, registrar alunos e suas frequências a partir de Tags RFID utilizando Banco de Dados, Sistema Web e App Mobile. Observando o tempo perdido com chamadas feitas ao início da aula, tempo esse que poderia ser melhor aproveitado pelo professor, pensei em uma solução para que esse registro fosse feito eletronicamente onde o professor possa receber a frequência de forma online. Para mais informações, recomendo acessar o repositório do projeto no GitHub.",
        tools: ['NodeJS', 'TypeScript', 'MySQL', 'MQTT', 'Express', 'React Native', 'ReactJS', 'Rest API'],
        code: '',
        demo: '',
        link: 'https://github.com/WilliamVSMartins/recor-manager',
        image: crefin,
    },
    {
        id: 2,
        name: 'AutoDomo',
        description: 'O projeto Autodomo é uma iniciativa que busca automatizar residências, escritórios e ambientes corporativos, utilizando tecnologia de ponta para proporcionar maior conforto, segurança e eficiência energética.  Por meio de sistemas de automação integrados, é possível controlar diversos dispositivos e equipamentos eletrônicos, como iluminação, ar-condicionado, cortinas, câmeras de segurança e sistemas de som, por exemplo. Além disso, o Autodomo permite que todas essas funções sejam controladas remotamente, usando um smartphone ou tablet, por exemplo.  Com o Autodomo, é possível criar cenários personalizados para diferentes ocasiões, como assistir a um filme, receber amigos ou até mesmo economizar energia quando estiver ausente. O sistema também oferece monitoramento em tempo real, permitindo identificar possíveis falhas ou problemas, garantindo assim maior segurança e confiabilidade.',
        tools: ['NodeJS', 'ReactJS', 'React Native', 'NextJS', 'Tailwind CSS', "NestJS", "TypeScript", "Docker"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        link: 'https://play.google.com/store/apps/details?id=br.com.aguiareng.autodomo',
        image: travel,
    },
    {
        id: 3,
        name: 'Cripto Specialist - Bot',
        description: 'Bot integrado com o Telegram e com uma exchange de criptomoedas que monitora o mercado e realiza operações de compra e venda de acordo com uma estratégia pré-definida.',
        tools: ['NodeJS', 'TypeScript', 'Telegram API', 'Binance API', 'NestJS', 'PostgreSQL', 'Jest', 'TDD'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        link: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Nous Joalheria',
        description: "Plataforma que proporciona uma experiência de compra única de joias de alta qualidade. No site, os visitantes podem explorar uma variedade de joias finas e personalizáveis. O usuário tem a liberdade de escolher a pedra para um anel, além de acessar informações detalhadas sobre cada peça, incluindo certificados de autenticidade. Também é mostrado uma visualização em 3D interativa, permitindo que o usuário explore a pedra do anel de diferentes ângulos, garantindo uma experiência de compra imersiva e informada.",
        tools: ['NextJS', 'Material UI', 'React Query', 'TypeScript'],
        code: '',
        demo: '',
        link: 'https://nousjoalheria.vercel.app/',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Artfy',
        description: "Artfy é uma plataforma que transforma suas músicas mais ouvidas no Spotify em wallpapers incríveis.",
        tools: ['NextJS', 'React Query', 'TypeScript', 'Spotify API'],
        code: '',
        demo: '',
        link: 'https://github.com/williamvsmartins/artfy',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'Cosmo',
        description: "Plataforma Web, chamada Cosmo, que é voltada à disseminação da cultura de algoritmos e estruturas de dados. O Cosmo se difere de outros produtos similares no mercado pela proposta de integração entre diversas metodologias ativas para o ensino de algoritmos, incluindo o uso de Dojos, gamificação, teste de software e juiz online para resolução de problemas. Além disso, o Cosmo faz uso de técnicas de IA para o sequenciamento de atividades, tornando a experiência do usuário personalizada e individualizada.",
        tools: ['Clean Architecture', 'Design Patterns', 'SOLID principles', 'NextJS', 'NodeJS', 'React Query', 'TypeScript', 'Docker','GitFlow' ,'TDD', 'DDD', 'CI/CD'],
        code: '',
        demo: '',
        image: ayla,
        link: 'https://cosmo.telemidia-ma.com.br/',
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },