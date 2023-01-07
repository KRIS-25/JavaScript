const marksMass = 78;
const marksHeight = 1.69;

const JohnsMass = 92;
const JohnsHeight = 1.95;

MarksBMI = marksMass / marksHeight ** 2;
JohnsBMI = JohnsMass / (JohnsHeight * JohnsHeight);

if (MarksBMI > JohnsBMI) {
  console.log(`Mark's BMI (${MarksBMI}) is higher than John's (${JohnsBMI})`);
} else {
  console.log(`John's BMI (${JohnsBMI}) is higher than Mark's (${MarksBMI})`);
}
