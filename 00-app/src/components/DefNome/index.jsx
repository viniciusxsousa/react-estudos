function DefNome({set}) {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Digite seu nome..." 
                onChange={(e) => set(e.target.value)}
            />
        </div>
    )
}

export default DefNome