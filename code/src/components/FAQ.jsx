import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const faqData = [
    {
        title: 'What is the purpose of this website?',
        content:
            'This website allows you to upload data from your social media accounts (e.g., TikTok or Twitter) for analysis. The data is processed to provide you with valuable insights in a readable format.',
    },
    {
        title: 'Is my uploaded data saved on this website?',
        content:
            'No, your uploaded data is not saved on our website. We prioritize your privacy and security. Your data is not stored on any online server or database.',
    },
    {
        title: 'How do I upload my social media data?',
        content:
            'Uploading your data is simple. Follow the instructions on the website to connect your social media account(s), select the data you want to analyze, and initiate the upload.',
    },
    {
        title: 'What type of analysis is performed on my data?',
        content:
            "We perform various analyses, depending on the data available. This may include data analysis, content summaries, trend identification, and more. You'll receive a comprehensive report.",
    },
    {
        title: 'Is my data used for any other purposes?',
        content:
            'Absolutely not. Your data is strictly used for the analysis you request and is not utilized for any other purposes nor shared with third parties.',
    },
    {
        title: 'How long does it take to receive the analysis results?',
        content:
            'The processing time varies depending on the amount of data and the complexity of the analysis. Most likely it is finished within a few seconds.',
    },
    {
        title: 'Can I trust the confidentiality of my data?',
        content:
            'Yes, you can trust us with your data. We take data privacy seriously and adhere to strict security measures. Your data is handled securely and confidentially.',
    },
    {
        title: 'Is this service free to use?',
        content:
            'Yes! This service is completely free of charge, therefore I also do not generate any money from this.',
    },
]

export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const containerStyle = {
        backgroundColor: 'transparent',
        width: '80%',
        margin: '0 auto',
        color: 'black',
        boxShadow: 'none',
    }

    const accordionStyle = {
        marginTop: '4px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'black',
        border: '2px solid black',
        borderRadius: '6px',
    }

    return (
        <Container maxWidth="md">
            <Box mt={3} display="flex" justifyContent="center">
                <Paper elevation={3} sx={containerStyle}>
                    {faqData.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index + 1}`}
                            onChange={handleChange(`panel${index + 1}`)}
                            sx={accordionStyle}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index + 1}-content`}
                                id={`panel${index + 1}-header`}
                            >
                                <Typography variant="h6" fontSize={'1.1rem'}>
                                    {faq.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">{faq.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Paper>
            </Box>
        </Container>
    )
}
