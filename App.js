import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
screen: {
flex: 1,


},
title: {
fontSize: 24,
marginBottom: 10,
},
subtitle: {
fontSize: 18,
marginBottom: 5,
},
description: {
fontSize: 14,
marginBottom: 20,
},
image: {
width: 400,
height: 200,
marginBottom: 10,
},
});

const HomeScreen = ({ navigate }) => (
<View style={styles.screen}>
<Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
<Text style={styles.title}>Maramag, Bukidnon</Text>
<Image source={require('./images.png')} styles={styles.image}/>
<Button title="Abouts and History " onPress={() => navigate('history')} />
<Button title="Delicacies" onPress={() => navigate('barangays')} />
<Button title="Tourist Spots" onPress={() => navigate('touristSpots')} />
</View>
);

const HistoryScreen = ({ navigate }) => {
const history = [

{
 
title: 'Maramag',
description: 'Is a municipality located in the province of Bukidnon, Philippines. Its known for its agricultural diversity and cultural richness. Heres a summary of key points about Maramag:'
,
image :require ('./images_(1).png') ,
},
{title: 'Location',
description: 'Southern part of Bukidnon province. Approximately 142 kilometers southeast of Cagayan de Oro City. 51 kilometers south of Malaybalay City (Bukidnon\'s capital). 156 kilometers from Davao City.', 
  image :require ('./images.png') ,
},
{title: 'Land Area',
description: '52,198.98 hectares (6.30% of Bukidnons total land area)',
image :require ('./images.png') ,
},
{title: 'Population',
description: '108,293 people (2020 census)',
image :require ('./download_(12).png') ,
},
{
title: 'Economy',
description: 'Agriculture is a major economic activity, with crops like rice, corn, and high-value vegetables. Maramag is known for its fertile plains and sustainable agricultural practices.',
image :require ('./download_(7_).png') ,
},
{
title: 'Culture',
description: 'The municipality celebrates its cultural heritage through various events and festivals. The name "Maramag" originates from the Manobo term "Ag Ramag Ki Dini," meaning "Let us eat our breakfast here."',
image :require ('./download_(8).png') ,
  
},
{
title: 'Early History',
description: 'Indigenous Settlement: The area was originally inhabited by indigenous Manobo tribes. Spanish Colonial Era: During the Spanish colonial period, Maramag was part of the larger province of Misamis. American Colonial Period: Under American rule, Maramag became part of the newly created Province of Bukidnon. Establishment as a Municipality: Maramag was officially established as a municipality on July 1, 1956, through Executive Order No. 272 issued by President Carlos P. Garcia. The original poblacion was located in Barangay Base Camp.',
image :require ('./download_(9).png') ,
},
{
title: 'Post War',
description: 'After World War II, the construction of the Sayre Highway led to the development of the current poblacion. The municipality has grown significantly, becoming a major agricultural hub in the region.',
image :require ('./download_(11).png') ,
},
];

return (
<ScrollView style={styles.screen}>
<Text style={styles.title}>History of Maramag, Bukidnon</Text>
{history.map((item, index) => (
<View key={index}>
<Text style={styles.subtitle}>{item.title}</Text>
<Image source={item.image} style={{width:200,height:200}}/>
<Text style={styles.description}>{item.description}</Text>

</View>
))}
<Button title="Back" onPress={() => navigate('home')} />

</ScrollView>
);
};

const BarangaysScreen = ({ navigate }) => {
const barangays = [
{ title: 'Inarab', description: 'A savory dish made from young rice grains cooked in coconut milk.' ,
image :require ('./download_(5).png') ,
},
{ title: 'Pinikpikan', description: 'A chicken dish cooked with a unique blend of spices and herbs.' ,
image :require ('./download_(6).png') ,
},

];

return (
<ScrollView style={styles.screen}>
<Text style={styles.title}>Delicacies of Maramag, Bukidnon</Text>
{barangays.map((item, index) => (
<View key={index}>
<Text style={styles.subtitle}>{item.title}</Text>
<Text style={styles.description}>{item.description}</Text>
<Image source={item.image} style={{width:200,height:200}}/>
</View>
))}
<Button title="Back" onPress={() => navigate('home')} />
</ScrollView>
);
};

const TouristSpotsScreen = ({ navigate }) => {
const touristSpots = [
{ title: 'Musuan Peak or Mount Musuan ', description: 'Also known as Mount Calayo is an active volcano in Maramag, Bukidnon, on the island of Mindanao in the Philippines. It is 4.5 kilometres south of the city of Valencia, province of Bukidnon, and 81 kilometres southeast of Cagayan de Oro.',
  image :require ('./download_(4).png') ,
},
{ title: ' Kiuntod Underground Stream and Cave ', description: ' Is a popular tourist destination in Maramag, Bukidnon, Philippines. It is known for its clear, cold water, which flows from an underground spring. The stream is surrounded by lush greenery and limestone cliffs, making it a peaceful and relaxing place to spend the day.' ,
  image :require ('./download_(2).png') ,
},
{ title: 'Mananum Spring', description: ' located in Maramag, Bukidnon, Philippines, is a popular outdoor recreation spot known for its crystal-clear waters and serene natural beauty. Its a perfect place for swimming, picnicking, and simply relaxing amidst lush greenery. The spring is surrounded by towering trees and offers a refreshing escape from the bustling city life. Its a great destination for families and friends to enjoy a day out in nature.', image :require ('./download_(3).png') ,},
{ title: ' Maramag Falls Camp 1 ', description: 'Maramag Falls is a popular tourist attraction in Don Carlos Bukidnon. It is known for its easy entry point making it a great destination for families and friends who want to enjoy a day out in nature. The falls stand 20 meters high and offer a unique view and scene perfect for photography .Maramag is also a suitable for family and friends picnic or outdoor gathering',
image :require ('./download_(1).png') ,
  
},

{ title: 'Mt. Alig Dagumbaan', description: 'Mt. Alig Dagumbaan is a popular hiking destination in Maramag, Bukidnon, Philippines. It is known for its challenging trails and stunning views. The mountain is 1200 meters above sea level and offers views of the surrounding countryside.' ,
  image :require ('./download.png') ,
},
];

return (
<ScrollView style={styles.screen}>
<Text style={styles.title}>Maramag History</Text>
{touristSpots.map((item, index) => (
<View key={index}>
<Text style={styles.subtitle}>{item.title}</Text>
<Text style={styles.description}>{item.description}</Text>
<Image source={item.image} style={{width:200,height:200}}/>
</View>
))}
<Button title="Back" onPress={() => navigate('home')} />
</ScrollView>
);
};

const App = () => {
const [screen, setScreen] = useState('home');

const navigate = (screen) => {
setScreen(screen);
};

return (
<View style={styles.container}>
{screen === 'home' && <HomeScreen navigate={navigate} />}
{screen === 'history' && <HistoryScreen navigate={navigate} />}
{screen === 'barangays' && <BarangaysScreen navigate={navigate} />}
{screen === 'touristSpots' && <TouristSpotsScreen navigate={navigate} />}
</View>
);
};

export default App;