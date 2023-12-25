export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "project";

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
}

export const profileConfig = {
  name: "Ying Sun",
  title: "Developer",
  bio: "Passionate full-stack coder who loves creating and enjoys learning new skills.",
  email: "sco.suen@gmail.com",
  location: "Montreal, Canada",
  locationLink:
    "https://www.google.com/maps/place/Montreal,+QC/data=!4m2!3m1!1s0x4cc91a541c64b70d:0x654e3138211fefef?sa=X&ved=2ahUKEwjxza2Lu6eDAxXovokEHRpND-YQ8gF6BAgdEAA",
};

export const bentoBoxes: GridItemInterface[] = [
  {
    layout: "2x4",
    type: "social",
  },
  {
    layout: "1x2",
    type: "social",
  },
  {
    layout: "1x2",
    type: "social",
  },
  {
    layout: "2x1",
    type: "social",
  },
  {
    layout: "2x1",
    type: "social",
  },
  {
    layout: "2x2",
    type: "social",
  },
];
