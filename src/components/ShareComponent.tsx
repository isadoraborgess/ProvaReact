import { useEffect, useState } from "react";
import { ShareRequestProps } from "../../src/interfaces/ShareRequestProps";
import { consultaAcaoPorCodigo } from "../../src/services/ShareAPI";

const ShareComponent: React.FC<ShareRequestProps> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        consultaAcaoPorCodigo(symbol)
            .then((response) => {
                setShareData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [symbol]);
    if (loading) return <div> Loading ...</div>;
    if (error) return <div> Error: {error}</div>;

    return (
        <>
            <div>
                <img src={share?.logourl} alt={`${symbol}'s avatar`} width={100} />
                <p>
                    <div>
                        <p>Nome: {share?.shortName}</p>
                        <p>Moeda: {share?.currency}</p>
                        <p>Variação média de preço nos últimos 200 dias: {share?.twoHundredDayAverageChange} </p>
                        <p>Preço regular no mercado: R$ {share?.regularMarketPrice}</p>
                        <p>Média de preço nos últimos 200 dias: R$ {share?.twoHundredDayAverage}</p>
                    </div>
                </p>
            </div>
        </>
    );
};

export default ShareComponent;