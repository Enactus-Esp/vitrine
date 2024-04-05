import {Heading} from "../share/Heading.jsx";


export const Presentation = () => {

    return (<>

        <Heading position={"center"} subtitle={"Enactus"} title={"Présentation"} text={`
            Enactus est une organisation internationale à but non lucratif qui encourage les étudiants à s'impliquer dans des projets d'entrepreneuriat social. Le nom "Enactus" est dérivé de l'expression "Entrepreneurial ACTion for others creates a better world" (l'action entrepreneuriale pour les autres crée un monde meilleur).
        `} />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="grid gap-8 sm:grid-cols-2">

                    {/* image - start */}
                    <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                        <img
                            src="./enactusImg.png"
                            loading="lazy" alt="Photo by Theo Crazzolara"
                            className="h-full w-full object-cover object-center"/>
                    </div>
                    {/* image - end */}

                    {/* content - start */}
                    <div className="flex flex-col items-start sm:items-start md:py-24 lg:py-32">
                        <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">Présentation</p>
                        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">Enactus ESP</h1>

                        <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg">
                        Enactus est présente dans plus de 1 700 établissements d'enseignement supérieur répartis dans 37 pays à travers lemonde. L'organisation favorise la collaboration entre les étudiants,les universités et les entreprises pour créer un impactpositif et durable dans les communautés.<br/> Chaque année, les équipes Enactus participent à descompétitions nationales et internationales, où ellesprésentent leurs projets devant un panel de juges composéde leaders d'entreprises et de professionnels. Ces compétitions offrent aux étudiants l'opportunité departager leurs réalisations, de recevoir des conseilsd'experts et de se connecter avec des partenairespotentiels.
                        </p>

                    </div>
                    {/* content - end */}
                </div>
            </div>
        </div>
    </>)
}