import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css',
})
export class SingleComponent {
  district = [
    
      {
        id: 1,
        title: 'TRIVANDRUM',
        image: 'assets/img/tvm.jpg',
        image2:"assets/img/cover.jpg",
        description:
          'Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala.',
      },
      {
        id: 2,
        title: 'ERANAKULAM',
        image: 'assets/img/EKM.jpg',
        description:
          'Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops along Broadway and on MG Road sell fabrics, crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink. Simple eateries serve Keralan specialties and South Indian seafood. ',
      },
      {
        id: 3,
        title: 'PALAKKKAD',
        image: 'assets/img/palakkad.jfif',
        description:
          'Palakkad, or Palghat, is a city in Kerala, a state in southwestern <br>India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival. Northeast, near Malampuzha Dam, the town of Malampuzha has a rock garden created from recycled materials.',
      },
      {
        id: 4,
        title: 'PATHANAMTHITTA',
        image: '../../../assets/img/pta.gif',
        description:
          'Pathanamthitta, is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district. The town has a population of 37,538. ',
      },
      {
        id: 5,
        title: 'IDUKKI',
        image: 'assets/img/idukki.webp',
        description:
          'Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years. Nearby, Munnar is a hill station known for its sprawling tea plantations and Tea Museum. Farther south is the vast, curved Idukki Dam and Periyar National Park, a tiger and elephant reserve',
      },
      {
        id: 6,
        title: 'MUNNAR',
        image: 'assets/img/munnar.webp',
        description:
          "Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.",
      },
      {
        id: 7,
        title: 'KOLLAM',
        image: 'assets/img/kollam1.webp',
        description:
          "Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation. The striped 1902 Tangasseri Lighthouse has ocean views. ",
      },
      {
        id: 8,
        title: 'KANNUR',
        image: 'assets/img/teyyam.jpg',
        description:
          "Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade. Housed in a former palace, the Arakkal Museum highlights Kerala's one Muslim royal family. The palm-fringed sands of Payyambalam Beach run along Kannur’s western shore. ",
      },
      {
        id: 9,
        title: 'ALAPPUZHA',
        image: 'assets/img/alappy.jpg',
        description:
          "Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event.",
      },
      {
        id: 10,
        title: 'KOZHIKODE',
        image: 'assets/img/kozhikode.avif',
        description:
          'Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498. The central Kozhikode Beach, overlooked by an old lighthouse, is a popular spot for watching the sunset. Inland, tree-lined Mananchira Square, with its musical fountain, surrounds the massive Mananchira Tank, an artificial pond. ',
      },
      {
        id: 11,
        title: 'KASARGODE',
        image: 'assets/img/kasar.jpg',
        description:
          'Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district. It is the northernmost district of Kerala and is also known as Sapta Bhasha Sangama Bhumi. ',
      },
      {
        id: 12,
        title: 'THRISSUR',
        image: 'assets/img/thrissur.jpg',
        description:
          "Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants. Sakthan Thampuran Palace houses an archaeology museum with bronze statues and ancient coins",
      },
      {
        id: 13,
        title: 'MALAPURAM',
        image: 'assets/img/malapuram.jpg',
        description:
          'Malappuram is a city and the headquarters of the Malappuram district in Kerala, India. It is the 4th largest urban agglomeration in Kerala and the 20th largest in India and a city in the Indian state of Kerala, spread over an area of 158.20 km² including the surrounding suburban areas.',
      },
      {
        id: 14,
        title: 'KOTTAYAM',
        image: 'assets/img/KOTTAYAM5.png',
        description:
          'Kottayam is a city in the Indian state of Kerala, flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. It is the district headquarters of Kottayam district, located in south-west Kerala. ',
      },
    
  ];
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.getdetails();
  }

  id: any;
  data: any;

  getdetails() {
    this.id = this.route.snapshot.params['id'];
    this.data = this.district.filter((d: any) => d.id == this.id);
    console.log(this.id,this.data);
  }
}
