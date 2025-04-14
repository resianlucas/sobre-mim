import styles from './Banner.module.css';
import foto from 'assets/minha_foto.png';
import circulo from 'assets/circulo_colorido.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Sou um desenvolvedor web em início de carreira, com foco em tecnologias modernas como HTML, CSS, JavaScript e React. Estou em constante aprendizado e busco criar interfaces limpas, funcionais e com uma boa experiência para o usuário. Tenho grande interesse em desenvolvimento front-end e estou construindo meu portfólio para atuar como freelancer e evoluir cada vez mais na área.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circulo}
                />
                <img
                    className={styles.minhaFoto}
                    src={foto}
                    alt='minha foto'
                />
            </div>
        </div>
    )
}