import './RedesSociais.css'

const RedesSociais = () => {
    const ListaRedes = [
        { id: 1 , urlNome: 'Instagram' , url: 'https://www.instagram.com/atomicpinkyy/' } ,
        { id: 2 , urlNome: 'DeviantArt' , url: 'https://www.deviantart.com/itsatomicpinky/' } ,
        { id: 3 , urlNome: 'YouTube' , url: 'https://www.youtube.com/atomicpinky/' } ,
        { id: 4 , urlNome: 'Twitter' , url: 'https://www.twitter.com/itsatomicpinky/' } ,
        { id: 5 , urlNome: 'Wattpad' , url: 'https://www.wattpad.com/atomicpinky/' }
    ]

    const LinksRedes = ListaRedes.map((props) => 
        <div key={props.id} className='conteudo_links'>
            <a href={props.url}>{props.urlNome}</a>
        </div>
    )

    return (
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais;