
export const Content = () => {


    return (<>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-md px-4 md:px-8">
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">A propos</h1>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Signifiant littéralement “nous pouvons”, Mën Nañ est un projet qui consiste à valoriser les ressources 
                naturelles de la Casamance. Il vise à: <br /></p>
                <blockquote><p className="mb-6 text-gray-500 sm:text-lg md:mb-8">● Lutter contre la pauvreté
                Grâce à la création d’activités génératrices de revenu, nous comptons réduire la pauvreté et améliorer 
                les conditions de vie des cibles. Ainsi, en travaillant sur la transformation des ressources naturelles 
                disponibles par zone et en agissant sur les durées de conservation nous obtenons un cycle de 
                production continu et des impacts durables.</p></blockquote>
                <blockquote><p className="mb-6 text-gray-500 sm:text-lg md:mb-8">● Réduire l’inégalité des sexes
                Nous ciblons directement les groupements formés intégralement ou presque par des femmes. Ces 
                dernières sont encouragées à se constituer en GIE ou à occuper des postes de responsabilité dans les 
                structures auxquelles elles appartiennent. Afin de favoriser un traitement égal et réduire les 
                discriminations, elles suivent des formations au même titre que les hommes.</p></blockquote>

                

                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Impacts</h2>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">En seulement cinq années Mën Nañ a permis au niveau social :</p>

                <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
                    <li> La création de 45 emplois</li>
                    <li> L’augmentation du panier de produits des GIE de 5 à plus de 28 produits</li>
                    <li> La création d’activités génératrices de revenus</li>
                    <li> L’amélioration de la santé et des conditions de vie des femmes, des jeunes filles et des enfants.</li>
                </ul>
                
                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                    <img
                        src="femmes maeva.jpg"
                        loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center"/>
                </div>

                <p className="text-gray-500 sm:text-lg">Au niveau économique, Mën Nañ a généré un chiffre d’affaires total de plus de
            3 662 000 FCFA principalement pour la zone de niaguiss puisque Saré Yoba il n’y a pas eu de production 
            par rapport aux formations dû à la pandémie de 2020
            D'un point de vue environnemental, nous avons mis en valeur les ressources naturelles de la zone sud 
            et permis de transformer plus d’une tonne de fruits et 1351 litres de lait destinés à la détérioration. 
            Ainsi que la mise en place d’un séchoir solaire a permis d’éliminer la méthode du séchage artisanal qui 
            n’était pas hygiénique et a été une alternative par rapport au séchoir à gaz qui est couteux.
            Le tout en adoptant une politique zéro gâchis avec le compostage des déchets.</p>
            </div>
        </div>
    </>)
}