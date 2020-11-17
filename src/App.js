import React, { useState } from 'react'
import { Grommet, Box, Button, Heading, Collapsible, ResponsiveContext, Layer, AccordionPanel, Text, Anchor, Accordion, Meter, Stack, CheckBox, DataTable} from 'grommet';
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils';
import { Notification, FormClose, SubtractCircle, AddCircle } from 'grommet-icons';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const mytheme = deepMerge(grommet, {
    defaultMode: 'dark',
    global: {
      font: {
        family: "Roboto",
      },
      colors: {
        brand: { 
          // dark: '#FFB3C1'
        },
        background: { 
          dark: '#292929' 
        },
        text: {
          dark: "#E2E0E5",
        },

      },
    },
    accordion: {
      icons: {
        collapse: SubtractCircle,
        expand: AddCircle,
      }
    }
  });

  const AppBar = (props) => (
    <Box
         tag='header'
         direction='row'
         align='center'
         justify='between'
         background='brand'
         pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='small'
         style={{ zIndex: '1' }}
         {...props}
       />
     );

    const total = 38;
    const [active, setActive] = useState(0);
    const [label, setLabel] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [checked, setChecked] = useState(true);
    const onChange = event => setChecked(event.target.checked);

     const sidebar = <>
 <Heading size="small">Don't leave {checked? "buying":"selling"} your home to chance</Heading>
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
      


      const columns = [
        {
          property: 'fee',
          header: <Text>Typical Fees</Text>,
          footer: 'Total',
        },
        {
          property: 'cost',
          header: '£',
          primary: true,
          aggregate: 'sum',
          footer: { aggregate: true },
        },
      ]
      const data = checked => {
        console.log('hello')
        return checked? [
          {
            fee: "Conveyancing",
            cost: 1000
          },
          { 
            fee: "Anti-money laundering checks",
            cost: 13,
          },
          { 
            fee: "Bankruptcy search",
            cost: 4,
          },
          { 
            fee: "Local authority searches	",
            cost: 350
          },
          { 
            fee: "Property fraud check",
            cost: 10
          },
          { 
            fee: "Bank transfer fees",
            cost: 25
          },
          { 
            fee: "Help to Buy supplement ^",
            cost: 250
          },
          { 
            fee: "Gifted deposit ^",
            cost: 75
          },
          { 
            fee: "Lifetime/Help to Buy ISA ^",
            cost: 60
          },
        ] : [
          {
            fee: "Conveyancing",
            cost: 1000
          },
          { 
            fee: "Anti-money laundering checks",
            cost: 13,
          },
          { 
            fee: "Transferring of ownership",
            cost: 250
          },
          { 
            fee: "Title deeds",
            cost: 6
          },
        ]
      }

      const [sort, setSort] = React.useState({
        property: 'fee',
        direction: 'desc',
      });

      const [themeMode, setThemeMode] = useState('dark');


  return (
    <Grommet theme={mytheme} themeMode={themeMode} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>Conveyance Me</Heading>
              <CheckBox
              toggle
              label="Dark Mode"
              checked={themeMode === 'dark'}
              onChange={() =>
                setThemeMode(themeMode === 'light' ? 'dark' : 'light')
              }
            />
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex justify='center' pad={{horizontal: 'xlarge'}}>
            <Heading size="small">Typical conveyancing steps</Heading>
            {checked?<Text>Legal transfer of ownership to you.</Text>:<Text>Legal transfer of ownership to your buyer.</Text>}
              <Box align="end" pad={{vertical: 'medium'}}>
        <CheckBox label={`${checked?'Buyer':'Seller'}`} toggle checked={checked} onChange={onChange} />
      </Box>
              <Accordion>
              
              <AccordionPanel label={<Text size="xlarge" margin="vertical">Conveyancer</Text>}>
                  <Text>
                    <Anchor href="https://www.clc-uk.org.uk/cms/cms.jsp?menu_id=19871" target="_blank">Choose a conveyancer</Anchor>
                    {checked? " when you're ready to make an offer and maybe get some " : " when your property is marketed so you don't delay the sale"}
                    {checked? <Anchor href="https://hoa.org.uk/advice/guides-for-homeowners/i-am-buying/homebuyer-protection-insurance/" target="_blank">Home Buyers’ Protection Insurance</Anchor> : null}
                    <Box align="center" pad="medium">
                      <DataTable
                        columns={columns.map(c => ({...c, search: c.property === 'fee'}))}
                        data={data(checked)}
                        sort={sort}
                        onSort={setSort}
                        resizeable
                      />
                      {checked?<Text size="small">^ varies depending on how you fund the purchase</Text>:null}
                    </Box>
                  </Text>
              </AccordionPanel>
              <AccordionPanel label={<Text size="xlarge" margin="vertical">Offer</Text>}>
              <Text>
              Details are exchanged in the estate agent's Memorandum of Sale once
              {checked? " the seller accepts your offer" : " you accept an offer"}
              </Text><br/>
              </AccordionPanel>
              <AccordionPanel label={<Text size="xlarge" margin="vertical">Contract</Text>}>
              <Text>
            {checked? "Review seller's contract pack and make enquiries into:":"Your conveyancer will put together a contract pack and may require information from you: "}
            <ul>
            <li>Property Information Form TA6</li>
            <li>Fittings and Contents Form TA10</li>
            <li>Leasehold Information Form^</li>
            <li>Title documents</li>
            <li>Certificates and guarantees^</li>
            <Text size="small">^varies depending on what you're {checked?"buying":"selling"}</Text>
            </ul>
            </Text>
        </AccordionPanel>
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Survey</Text>}>
        {checked?<Text>
            You or your lender may want a home survey:
          <ul>
            <li><Anchor href="https://www.rics.org/globalassets/rics-website/media/upholding-professional-standards/sector-standards/building-surveying/homebuyer-report-survey-valuation-professional-statement-5th-edition-rics.pdf" target="_blank">HomeBuyer Report </Anchor>
             - survey of damage or future repairs like damp or subsidence</li>
            <li><Anchor href="https://www.rics.org/globalassets/rics-website/media/upholding-professional-standards/sector-standards/building-surveying/building-survey-description-and-standard-terms-of-engagement-rics.pdf" target="_blank">Building Survey </Anchor> 
            - detailed inspection of property condition</li>
            </ul>
            </Text>:<Text>You can get a survey done when you market the property to speed up the sale<br/><br/></Text>}
        </AccordionPanel>
        {checked?<AccordionPanel label={<Text size="xlarge" margin="vertical">Searches</Text>}>
        <Text>
          Conveyancer will carry out necessary searches:
        <ul>
          <li><Anchor href="https://hoa.org.uk/advice/guides-for-homeowners/i-am-buying/local-authority-searches-explained/" target="_blank">Local Authority </Anchor> 
          - controls on the building and surrounds</li>
            <li>Environmental - polution and invasive species</li>
            <li><Anchor href="https://flood-warning-information.service.gov.uk/long-term-flood-risk/postcode" target="_blank">Flood </Anchor> 
            - drainage and any nearby water courses</li>
        </ul>
            </Text>
        </AccordionPanel>:null}
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Completion</Text>}>
        <Text>
          {checked?"Conveyancers communicate to progress with contract exchange on your chosen date and send 10% deposit":"Agree the completion date and your conveyancer will receive 10% deposit"}
          </Text><br/>
        </AccordionPanel>
        <AccordionPanel label={<Text size="xlarge" margin="vertical">Exchange</Text>}>
        {checked?<Text>
          On completion day:
        <ul>
          <li>Agree statement of accounts</li>
          <li>Sign 
          <Anchor href="https://www.gov.uk/government/publications/registered-titles-whole-transfer-tr1" target="_blank"> Transfer of Title TR1 </Anchor> 
          and mortgage deeds</li>
          <li>Conveyancer does final 
          <Anchor href="https://www.land-search-online.co.uk/portal/conveyancing.asp?search=title-register" target="_blank"> Land Registry search </Anchor></li>
          <li>Send contract pack and funds to seller's solicitor</li>
        </ul>
          </Text>:<Text>
          Sign the contract pack and make sure the property is clean and your conveyancer has all door keys on completion day<br/><br/>
          </Text>}
        </AccordionPanel>
        {checked?<AccordionPanel label={<Text size="xlarge" margin="vertical">Government</Text>}>
        <Text>
          Conveyancer send TR1 to Land Registry and pay any <Anchor href="https://www.tax.service.gov.uk/calculate-stamp-duty-land-tax/#/intro" target="_blank"> Stamp Duty to HMRC</Anchor>
          </Text><br/>
        </AccordionPanel>:null}
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
