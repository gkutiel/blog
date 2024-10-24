---
date: 2024-10-02
author: גלעד קותיאל
title: כיצד מבצעים ניסוי מדעי?
description: ביצוע ניסוי מדעי בצורה נכונה חיוני להסקת מסקנות מהימנות. ללא הקפדה על עקרונות מדעיים ברורים, תוצאות הניסוי עלולות להטעות ולגרום לפרשנות שגויה של הנתונים.
image: img/random.jpg
favicon: 🔬
---

[ניסוי מבוקר הקצאה אקראית](https://he.wikipedia.org/wiki/%D7%A0%D7%99%D7%A1%D7%95%D7%99_%D7%9E%D7%91%D7%95%D7%A7%D7%A8_%D7%94%D7%A7%D7%A6%D7%90%D7%94_%D7%90%D7%A7%D7%A8%D7%90%D7%99%D7%AA) נחשב לצורה האמינה ביותר להסקת מסקנות, כיצד מבצעים ניסוי כזה?

נניח שאנחנו רוצים לתכנן ניסוי שיענה על השאלה **האם טבילה במים קרים משפרת את איכות השינה?**

כדי לענות על השאלה הזאת יש לבצע מספר שלבים (נפרט בהמשך על חשיבותו של כל שלב):

1. דבר ראשון אנחנו צריכים להגדיר למה בדיוק אנחנו מתכוונים כשאנו מתייחסים ל**טבילה במים קרים** ולהגדיר כיצד אנחנו מודדים את **איכות השינה** בצורה אוביקטיבית.
2. לאחר מכן אנחנו צריכים לקחת [מדגם מייצג](https://he.wikipedia.org/wiki/%D7%9E%D7%93%D7%92%D7%9D) של האוכלוסיה עליה אנחנו רוצים שתוצאות הניסוי יהיו תקפות, המדגם צריך להיות מספיק גדול. בדוגמה שלנו אנחנו מעוניינים באוכלסיה ש**לא מבצעת טבילה במים קרים**.
3. את המדגם המייצג אנחנו צריכים לחלק באופן **אקראי** לשתי קבוצות: קבוצת הטיפול וקבוצת הביקורת (כדאי בגדלים שווים עד כמה שניתן). בקבוצת הטיפול יהיו נבדקים שיתבקשו לבצע טבילה במים קרים לפי ההגדרה של הניסוי ובקבוצת הבקרה יהיו אנשים שימשיכו באורח החיים הרגיל שלהם (וימענו מטבילה במים קרים).
4. את תוצאות הניסוי מנתחים בעזרת [כלים סטטיסטיים](https://he.wikipedia.org/wiki/%D7%A0%D7%99%D7%A1%D7%95%D7%99_%D7%9E%D7%91%D7%95%D7%A7%D7%A8_%D7%94%D7%A7%D7%A6%D7%90%D7%94_%D7%90%D7%A7%D7%A8%D7%90%D7%99%D7%AA#%D7%A0%D7%99%D7%AA%D7%95%D7%97_%D7%A0%D7%AA%D7%95%D7%A0%D7%99%D7%9D) מתאימים.
5. לניסוי קיימות שתי תוצאות אפשריות: 1. טבילה במים קרים משפרת את איכות השינה [באופן מובהק](https://he.wikipedia.org/wiki/%D7%9E%D7%95%D7%91%D7%94%D7%A7%D7%95%D7%AA_%D7%A1%D7%98%D7%98%D7%99%D7%A1%D7%98%D7%99%D7%AA), או 2. לא הצלחנו להוכיח **באופן מובהק** שטבילה במים אכן משפרת את איכות השינה. חשוב לציין שבמידה וקיבלנו את התוצאה השניה יתכן והדבר נובע מכך שגודל המדגם שלנו קטן מדי ולאו דוקא בגלל חוסר קשר בין טבילה במים קרים לאיכות השינה.

### מהו מדגם מייצג?

מדגם מייצג, כשמו כן הוא, הוא מדגם שאמור לייצג את כלל האוכלוסייה. לדוגמה, כאשר אנו טועמים מרק שמתבשל, אנו מניחים שטעם המרק בכף שלקחנו (המדגם) מייצג את הטעם של המרק בסיר כולו, ואין הבדלי טעם משמעותיים בין המרק בתחתית הסיר לזה שבפני השטח, למשל.

באופן קצת יותר מדויק מדגם מייצג צריך להיות [מדגם הסתברותי](https://he.wikipedia.org/wiki/%D7%9E%D7%93%D7%92%D7%9D#%D7%9E%D7%93%D7%92%D7%9E%D7%99%D7%9D_%D7%94%D7%A1%D7%AA%D7%91%D7%A8%D7%95%D7%AA%D7%99%D7%99%D7%9D) (ובעל גודל מספק) כלומר מדגם שבו לכל פרט באוכלוסייה סיכוי שווה להיכלל בו.

דגימה מייצגת של אוכלוסיית אנשים היא משימה מאתגרת ומורכבת, ולא נדון בה בפוסט הזה.


### מדוע חשוב גודל המדגם?

מדגם קטן מדי עלול להוליך אותנו למסקנות שגויות. לדוגמה, נניח שטבילה במים קרים **אינה משפיעה כלל** על איכות השינה, ובחרנו מדגם של שני אנשים, יואב ויעל. נניח גם שאיכות השינה של יעל גבוהה משמעותית מזו של יואב. מה יהיו תוצאות הניסוי? אם יעל תשובץ לקבוצת הטיפול, נקבל לכאורה שלטיפול (טבילה במים קרים) יש השפעה חיובית על איכות השינה, ולהפך, בעוד שבפועל אין לו השפעה כלל. אינטואיטיבית, ככל שנבחר מדגם גדול יותר, **הסיכוי** לטעות כזאת ילך ויקטן. שימוש בכלים סטטיסטיים מאפשר לנו להעריך את הסיכוי לטעות כזאת, ומקובל להתייחס לסיכוי שמתחת ל-5% כסיכוי נמוך מספיק, ולהתייחס לתוצאות הניסוי כקבילות.


### מה החסרונות של ניסוי מבוקר בהקצאה אקראית?

החסרון העיקרי של ניסוי כזה הוא כמות המשאבים שהוא צורך: בחירת מדגם, מעקב אחר הנבדקים במשך כל תקופת הטיפול (לפעמים במשך שנים), ועלויות נוספות (כגון תשלום לנבדקים). לעיתים עצם קיום הניסוי עלול להשפיע על תוצאותיו. לדוגמה, אם רוצים לבדוק האם לנטילת תרופה מסוימת יש תופעת לוואי שפוגעת באיכות השינה, ייתכן שהנבדקים, רק מעצם הידיעה שהם משתתפים בניסוי, יחוו ירידה באיכות השינה (שלא כתוצאה ישירה מהתרופה). במקרים כאלה, ניתן לנטרל את ההשפעה הזו על ידי מתן [פלצבו](https://he.wikipedia.org/wiki/%D7%A4%D7%9C%D7%A6%D7%91%D7%95) לקבוצת הבקרה.

כדי לנטרל הטיות נוספות, ניתן לבצע את הניסוי בצורה [עיוורת](https://he.wikipedia.org/wiki/%D7%A1%D7%9E%D7%99%D7%95%D7%AA_%D7%9B%D7%A4%D7%95%D7%9C%D7%94), כך שהמשתתפים ו/או עורכי הניסוי אינם יודעים לאיזו קבוצה כל נבדק שייך. 

חסרון נוסף של ניסוי מבוקר הוא שלפעמים פשוט אי אפשר לבצע אותו. לדוגמה, אם רוצים לבדוק את השפעת סוג המשטר (דמוקרטי מול דיקטטורה) על כלכלת המדינה.

### מחקר תצפיתי

בניגוד למחקר מבוקר, ב[מחקר תצפיתי](https://en.wikipedia.org/wiki/Observational_study) החוקרים אינם בוחרים את קבוצת הנבדקים, אלא משווים בין שתי אוכלוסיות שונות מבלי להתערב בהתנהגות שלהן. לדוגמה, אם היינו רוצים לבדוק את ההשפעה של טבילה במים קרים על איכות השינה, היינו יכולים לעקוב אחר איכות השינה של אוכלוסייה ש[שוחה במים פתוחים](https://he.wikipedia.org/wiki/%D7%A9%D7%97%D7%99%D7%99%D7%94_%D7%91%D7%9E%D7%99%D7%9D_%D7%A4%D7%AA%D7%95%D7%97%D7%99%D7%9D) במהלך החורף, בהשוואה לאוכלוסייה שאינה נחשפת למים קרים.

הבעיה העיקרית במחקר תצפיתי היא הקושי להסיק ממנו מסקנות חד-משמעיות. למשל, נניח שבדוגמה הנ"ל נמצא ששחייני החורף ישנים טוב יותר מקבוצת הבקרה – האם ניתן להסיק שהשיפור בשינה הוא תוצאה של חשיפה למים הקרים? אולי דווקא השחייה עצמה היא שמשפרת את השינה? ואולי בכלל הקשר הפוך, כלומר, רק אנשים שישנים טוב בלילה הולכים לשחות בחורף?

קיימות שיטות להסיק מסקנות גם ממחקרים תצפיתיים, אך הן מורכבות ומותאמות בדרך כלל לכל ניסוי באופן פרטני.



