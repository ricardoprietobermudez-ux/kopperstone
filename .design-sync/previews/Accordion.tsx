import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'kopperstone-ui';

export const Default = () => (
  <Accordion type="single" collapsible defaultValue="lead-time" style={{ maxWidth: 480 }}>
    <AccordionItem value="lead-time">
      <AccordionTrigger>What's the lead time for custom cabinetry?</AccordionTrigger>
      <AccordionContent>
        Most custom cabinetry orders are fabricated and installed within 8-10 weeks
        of final design approval, depending on wood species and finish selections.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="consultation">
      <AccordionTrigger>Do you offer in-home consultations?</AccordionTrigger>
      <AccordionContent>
        Yes. A Kopperstone designer will visit your home to take precise measurements,
        review material samples, and discuss layout options before we draft a quote.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="templating">
      <AccordionTrigger>How does countertop templating work?</AccordionTrigger>
      <AccordionContent>
        Once cabinetry is installed, our fabrication team creates a precise digital
        template of your surfaces. Slabs are then cut to match before delivery and install.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="warranty">
      <AccordionTrigger>What warranty comes with fabrication?</AccordionTrigger>
      <AccordionContent>
        All Kopperstone countertops carry a lifetime fabrication warranty covering
        seams, edge work, and installation defects.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const AllCollapsed = () => (
  <Accordion type="single" collapsible style={{ maxWidth: 480 }}>
    <AccordionItem value="lead-time">
      <AccordionTrigger>What's the lead time for custom cabinetry?</AccordionTrigger>
      <AccordionContent>
        Most custom cabinetry orders are fabricated and installed within 8-10 weeks
        of final design approval, depending on wood species and finish selections.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="consultation">
      <AccordionTrigger>Do you offer in-home consultations?</AccordionTrigger>
      <AccordionContent>
        Yes. A Kopperstone designer will visit your home to take precise measurements,
        review material samples, and discuss layout options before we draft a quote.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="templating">
      <AccordionTrigger>How does countertop templating work?</AccordionTrigger>
      <AccordionContent>
        Once cabinetry is installed, our fabrication team creates a precise digital
        template of your surfaces. Slabs are then cut to match before delivery and install.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
