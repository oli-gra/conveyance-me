import React, { useState } from 'react'
import { Grommet, Box, Button, Heading, Collapsible, ResponsiveContext, Layer, AccordionPanel, Text, Paragraph, Anchor, Accordion, Meter, Stack, CheckBox} from 'grommet';
import { dark } from 'grommet/themes'
import { Notification, FormClose, SubtractCircle, AddCircle } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const mytheme = deepMerge(dark, {
    defaultMode: 'dark',
    global: {
      font: {
        family: "'Quicksand', 'arial'",
        face: `
        @font-face {
          font-family: "Quicksand";
          src: url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap') format('ttf');
        }
        `
      },
      colors: {
        brand: { 
          dark: '#FFB3C1'
        },
        background: { 
          dark: '#292929' 
        },
        text: {
          dark: "#E2E0E5",
        },

      },
    },
  });

  const AppBar = (props) => (
       <Box
         tag='header'
         direction='row'
         align='center'
         justify='between'
         background='brand'
         pad={{ left: 'medium', right: 'small', vertical: 'small' }}
         elevation='medium'
         style={{ zIndex: '1' }}
         {...props}
       />
     );

     const total = 38;
  const [active, setActive] = useState(0);
  const [label, setLabel] = useState('');
  const [highlight, setHighlight] = useState(false);
     const sidebar = <>
 <Heading size="small">Don't leave buying your home to chance</Heading>
 <Box align="center">
 <Stack anchor="center">
     
     <Meter
       type="circle"
       values={[
         {
           value: 46,
           onHover: over => {
             setLabel(over ? 'change of heart' : undefined);
             setActive(over ? 46 : 0)
           },
           onClick: event => {
             setHighlight(() => !highlight);
           },
           highlight,
         },
         {
           value: 23,
           onHover: over => {
             setLabel(over ? 'fail to renegotiate' : undefined);
             setActive(over ? 23 : 0)
           },
         },
         {
           value: 12,
           onHover: over => {
             setLabel(over ? 'lending shortfall' : undefined);
             setActive(over ? 12 : 0)
           },
         },
         {
           value: 10,
           onHover: over => {
             setLabel(over ? 'survey nightmare' : undefined);
             setActive(over ? 10 : 0)
           },
         },
         {
           value: 8,
           onHover: over => {
             setLabel(over ? 'collapsed chain' : undefined);
             setActive(over ? 8 : 0)

           },
         },
       ]}
       size="small"
       thickness="medium"
     />
     <Box align="center">
       <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
         <Text size="xxlarge" weight="bold">
           {active || total}
         </Text>
         <Text>%</Text>
       </Box>
       <Text size="medium">{label || 'sales fail'}</Text>
     </Box>
   </Stack>
 </Box>
     </>
      
      const [checked, setChecked] = useState(true);
      const onChange = event => setChecked(event.target.checked);

  return (
    <Grommet theme={mytheme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>Conveyance Me</Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex justify='center' pad="10em">

              <Box align="end" pad="small">
        <CheckBox label={`${checked?'buying':'selling'}`} toggle checked={checked} onChange={onChange} />
      </Box>
              <Accordion>
              
              <AccordionPanel label={<Text size="xlarge" margin="vertical">Conveyancer</Text>}>
                  <Paragraph size="large" fill>
                    <Anchor href="https://www.clc-uk.org.uk/cms/cms.jsp?menu_id=19871" target="_blank">Choose a conveyancer </Anchor> 
                    as soon as you're ready to make an offer and get some 
                    <Anchor href="https://hoa.org.uk/advice/guides-for-homeowners/i-am-buying/homebuyer-protection-insurance/" target="_blank"> Home Buyers’ Protection Insurance</Anchor>
                  </Paragraph>
              </AccordionPanel>
              <AccordionPanel label={<Text size="xlarge" margin="vertical">Offer</Text>}>
              <Paragraph size="large" fill>
              Details are exchanged in the estate agent's Memorandum of Sale once the seller accepts your offer
              </Paragraph>
              </AccordionPanel>
              <AccordionPanel label={<Text size="xlarge" margin="vertical">Contract</Text>}>
              <Paragraph size="large" fill>
            Review seller's contract pack and make enquiries into:

            <li>Property Information Form</li>
            <li>Fittings and Contents Form</li>
            <li>Leasehold Information Form if relevant </li>
            <li>Title documents</li>
            <li>Certificates and guarantees</li>
            </Paragraph>
        </AccordionPanel>
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Survey</Text>}>
        <Paragraph size="large" fill>
            You or your lender may want a home survey:
            <Anchor href="https://www.rics.org/globalassets/rics-website/media/upholding-professional-standards/sector-standards/building-surveying/homebuyer-report-survey-valuation-professional-statement-5th-edition-rics.pdf" target="_blank">HomeBuyer Report </Anchor>
             - survey of damage or future repairs like damp or subsidence<br /><br />
            <Anchor href="https://www.rics.org/globalassets/rics-website/media/upholding-professional-standards/sector-standards/building-surveying/building-survey-description-and-standard-terms-of-engagement-rics.pdf" target="_blank">Building Survey </Anchor> 
            - detailed inspection of property condition
            </Paragraph>
        </AccordionPanel>
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Searches</Text>}>
        <Paragraph size="large" fill>
          Conveyancer will carry out necessary searches:
          <li><Anchor href="https://hoa.org.uk/advice/guides-for-homeowners/i-am-buying/local-authority-searches-explained/" target="_blank">Local Authority </Anchor> 
          - controls on the building and surrounds</li>
            <li>Environmental - polution and invasive species</li>
            <li><Anchor href="https://flood-warning-information.service.gov.uk/long-term-flood-risk/postcode" target="_blank">Flood </Anchor> 
            - drainage and any nearby water courses</li>
            </Paragraph>
        </AccordionPanel>
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Completion</Text>}>
        <Paragraph size="large" fill>
          Conveyancer communicates with seller's solicitor to progress with contract exchange on your chosen date and sends 5-10% deposit
          </Paragraph>
        </AccordionPanel>
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Exchange</Text>}>
        <Paragraph size="large" fill>
          On completion day:
          <li>Agree statement of accounts</li>
          <li>Sign 
          <Anchor href="https://www.gov.uk/government/publications/registered-titles-whole-transfer-tr1" target="_blank"> Transfer of Title TR1 </Anchor> 
          and mortgage deeds</li>
          <li>Conveyancer does final 
          <Anchor href="https://www.land-search-online.co.uk/portal/conveyancing.asp?search=title-register" target="_blank"> Land Registry search </Anchor></li>
          <li>Send contract pack and funds to seller's solicitor</li>
          </Paragraph>
        </AccordionPanel>
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Government</Text>}>
        <Paragraph size="large" fill>
          Conveyancer send TR1 to Land Registry and pay any <Anchor href="https://www.tax.service.gov.uk/calculate-stamp-duty-land-tax/#/intro" target="_blank"> Stamp Duty to HMRC</Anchor>
          </Paragraph>
        </AccordionPanel>
        </Accordion>

              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box flex width='medium' align='center' justify='center'>
                    {sidebar}
                  </Box>
                </Collapsible>
                ): (
              <Layer>
                <Box tag='header' justify='end' align='center' direction='row'>
                  <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                </Box>
            <Box fill align='center' justify='center'>
            {sidebar}
            </Box>
              </Layer>
                )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
