import map from "../../../assets/images/Map.jpg";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const ContactMap = () => {
  const items = [
    {
      uuid: "germany",
      heading: "Germany Office",
      content: (
        <>
          <p>123 Main St, Berlin, Germany</p>
          <p>+49 123 456 789</p>
          <p>germany@domain.com</p>
          <p>Mon - Fri: 9am - 5pm</p>
        </>
      ),
    },
    {
      uuid: "slovakia",
      heading: "Slovakia Office",
      content: (
        <>
          <p>456 Center Rd, Bratislava, Slovakia</p>
          <p>+421 987 654 321</p>
          <p>slovakia@domain.com</p>
          <p>Mon - Fri: 8am - 4pm</p>
        </>
      ),
    },
    {
      uuid: "lithuania",
      heading: "Lithuania Office",
      content: (
        <>
          <p>575 Crescent Ave. Quakertown, PA 18951</p>
          <p>+432 533 12 523</p>
          <p>info@domain.com</p>
          <p>Mon - Fri: 9am - 6pm</p>
        </>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-[1600px] mx-auto h-[572px] bg-gray-200 overflow-hidden font-sans">
      <img
        src={map}
        alt="Map background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute top-12 left-12 md:left-24 bg-white p-6 shadow-lg w-[340px] md:w-[380px] rounded-sm z-10">
        <Accordion
          allowZeroExpanded
          preExpanded={["lithuania"]}
          className="w-full"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.uuid}
              uuid={item.uuid}
              className="border-b border-gray-100 last:border-none mb-2"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="w-full flex justify-between items-center text-left font-bold text-gray-800 py-3 cursor-pointer outline-none select-none">
                  <span className="text-[15px]">{item.heading}</span>

                  <AccordionItemState>
                    {({ expanded }) => (
                      <span className="text-xl font-light text-gray-400 leading-none">
                        {expanded ? "-" : "+"}
                      </span>
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel className="pb-4 pt-1 text-[13px] text-[#767676] space-y-[10px]">
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ContactMap;
