import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Grid, Dropdown } from 'semantic-ui-react';
import SidebarPerm from '../../../../components/SidebarPerm';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';

function KingText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/king').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>The king can move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.</p>;
}

function QueenText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/queen').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>The queen can move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.</p>;
}

function RookText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/rook').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>The queen can move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.</p>;
}

function BishopText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/bishop').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>The bishop can move diagonally any number of squares. They are unable to jump over pieces.</p>;
}

function KnightText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/knight').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>The knight can move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.</p>;
}

function PawnText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/pawn').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>The pawn can move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king.</p>;
}

function DisplayedText(props) {
    const piece = props.piece;
    switch (piece) {
        case 1:
            return <KingText />;
        case 2:
            return <QueenText />;
        case 3:
            return <RookText />;
        case 4:
            return <BishopText />;
        case 5:
            return <KnightText />;
        case 6:
            return <PawnText />;
        default:
            return <PawnText />;
    }
}

const pieces = [
    {
        key: 1,
        text: 'King',
        value: 1,
    },
    {
        key: 2,
        text: 'Queen',
        value: 2,
    },
    {
        key: 3,
        text: 'Rook',
        value: 3,
    },
    {
        key: 4,
        text: 'Bishop',
        value: 4,
    },
    {
        key: 5,
        text: 'Knight',
        value: 5,
    },
    {
        key: 6,
        text: 'Pawn',
        value: 6,
    },
];

const BasicMovements = () => {
    const handleDropdownClick = async (event, data) => {
        setPieceSelected(data.value);
    };
    const [pieceSelected, setPieceSelected] = useState();
    return (
        <div>
            <SidebarPerm id="sidebarneedsstyle">
                <h1 class="title">Basic Movements</h1>

                <Grid style={{ height: '30vh' }}>
                    <Grid.Row centered>
                        <Grid.Column width={6}>
                            <Dropdown
                                placeholder="Select Option"
                                fluid
                                selection
                                options={pieces}
                                onChange={handleDropdownClick}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column width={6}>
                            <WithMoveValidation />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column width={6}>
                            <div id="infotext">
                                <DisplayedText piece={pieceSelected} />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid className="univbackground">
                    <Grid.Row style={{ height: '110vh' }}></Grid.Row>
                </Grid>
            </SidebarPerm>
        </div>
    );
};

export default BasicMovements;
