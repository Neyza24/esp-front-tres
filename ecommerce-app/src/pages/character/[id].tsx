import { Layout } from '@/components/layouts/Layout';
import { Card } from '@/components/ui/card';
import { Character } from '@/interface';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const CharacterPage = () => {

    const router = useRouter();

    const [character, setCharacter] = useState<Character>({} as Character);

    const getCharacter = async () => {
        const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${router.query.id}`);
        const data = await res.json();
        setCharacter(data.amiibo[0]);
    }

    useEffect(() => {
        getCharacter();
    }, [])

    return (
        <Layout title='Character'>
            <Card character={character} />
        </Layout>

    )
}

export default CharacterPage;