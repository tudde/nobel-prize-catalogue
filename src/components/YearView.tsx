import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPrizesByYear, sortPrizes } from '../services/NobelPrizeService';
import { NobelPrizeEntry, Language, SortOrder } from '../model/Types'
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, Container } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const YearView = () => {
    const { yearSelected, languageSelected } = useParams<{yearSelected : string, languageSelected : Language}>();
    const [prizeData, setPrizeData] = useState<NobelPrizeEntry[]>([]);
    const [sortSelected, setSortSelected] = useState<SortOrder>("dateDescending");

    useEffect(() => {
        getPrizesByYear(yearSelected).then((res) => {
                    setPrizeData(res);
                }).catch((err) => {
                    console.error(err);
                })
    },[yearSelected])

   useEffect(() => {
        sortPrizes(prizeData, sortSelected, languageSelected || "en");
   },[sortSelected, languageSelected, prizeData])

    return (
        <Container maxWidth={false}>
            <Link to="/">
                <IconButton color='primary'>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
            </Link>
            <Typography variant="h1" color="initial">Prizes awarded in {yearSelected}</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> 
                                Category 
                                <IconButton color="primary" onClick={e => setSortSelected("categoryDescending")}> 
                                    <KeyboardArrowDownIcon/>    
                                </IconButton>
                                <IconButton color="primary" onClick={e => setSortSelected("categoryAscending")}>
                                    <KeyboardArrowUpIcon/> 
                                </IconButton>
                            </TableCell>
                            <TableCell> 
                                Date awarded 
                                <IconButton color="primary" onClick={e => setSortSelected("dateDescending")}> 
                                    <KeyboardArrowDownIcon/>    
                                </IconButton>
                                <IconButton color="primary" onClick={e => setSortSelected("dateAscending")}>
                                    <KeyboardArrowUpIcon/> 
                                </IconButton>
                            </TableCell>
                            <TableCell> Prize amount </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prizeData.map((entry, index) => {
                            return <TableRow key={index}>
                                        <TableCell> {entry.category[languageSelected || "en"]} </TableCell>
                                        <TableCell> {entry.dateAwarded} </TableCell>
                                        <TableCell> {entry.prizeAmount.toLocaleString()} </TableCell>
                                    </TableRow>
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            
        </Container>
    );
};

export default YearView;