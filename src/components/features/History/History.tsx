import { useMemo } from "react";
import { styled } from "styled-components";

function History() {
  const isMobile = useMemo(() => window.innerWidth <= 900, []);

  return (
    <Wrapper isMobile={isMobile}>
      <Heading>Квартирно-готельний комплекс Nirvana</Heading>
      <SubHeading>
        Ласкаво просимо в квартирно-готельний комплекс Nirvana!
      </SubHeading>
      <Text>
        Розташований у самому серці Рівного, наш готель пропонує комфорт і
        затишок для вашого відпочинку. Чи ви приїхали в бізнес-відрядження або
        шукаєте місце для невеликого відпочинку, ми маємо все, що вам потрібно.
      </Text>
      <Text>
        Завдяки ідеальному розташуванню поруч з парком Т.Г. Шевченка та центром
        міста, ви з легкістю зможете дістатися до всіх основних визначних місць
        і ресторанів, які Рівне пропонує.
      </Text>
      <Text>
        Наш готель пропонує 15 затишних номерів, які забезпечують максимальний
        комфорт для наших гостей. Кожен номер обладнаний усіма зручностями,
        включаючи кондиціонер, сучасний телевізор, Wi-Fi, мікрохвильову піч,
        електрочайник, холодильник та посуд. Вишуканий дизайн та ортопедичні
        матраци в кожному номері гарантують ваш комфортний відпочинок.
      </Text>
      <Text>
        Окрім того, ми пропонуємо гнучкі тарифи для наших гостей. У нашому
        готелі є можливість орендувати номери по годинам, що дозволяє вам
        скористатися нашими послугами навіть на короткий період часу.
      </Text>
      <Text>
        В нашому готелі безпека гостей є нашим пріоритетом. Ми дотримуємося всіх
        необхідних заходів протиепідемічної безпеки та забезпечуємо регулярне
        прибирання та дезінфекцію усіх приміщень.
      </Text>
      <Text>
        <b>Квартирно-готель Nirvana</b> - це місце, де зустрічаються комфорт,
        затишок і високий рівень обслуговування. Ми прагнемо, щоб ваше
        перебування було незабутнім, тому ми піклуємося про кожну деталь, щоб
        зробити ваш відпочинок найкращим. Приходьте до нас і переконайтеся, що
        готель Nirvana - ваш кращий вибір у Рівному!
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled("div")<{isMobile:boolean}>`
  width:${({isMobile})=>isMobile? '80%':'70%'};
  margin:0 auto;
  background: '#f2f2f2''
`;

const SubHeading = styled("h4")`
  font-size: 18px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
`;

const Text = styled("p")`
  line-height: 24px;
  font-weight: 200;
  font-family: "Open Sans", sans-serif;
`;
const Heading = styled("h3")`
  font-size: 38px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;
export default History;
