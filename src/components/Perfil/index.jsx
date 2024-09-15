import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Foto do perfil do Github"/>
            <h1 className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )
}

export default Perfil;

// Escrita de forma mais sucinta = export default () => {... Bloco de código};