import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Scroll to the fragment based on the URL
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  activeTab: string = 'Section1'; // Default active tab

  // Data for Programming Languages
  programmingLanguages = [
    { name: 'Node.js', img: '../../assets/img/node-js.png' },
    { name: 'Python', img: '../../assets/img/python.png' },
    { name: 'HTML', img: '../../assets/img/html.png' },
    { name: 'AngularJS', img: '../../assets/img/angularjs.png' },
    { name: 'React', img: '../../assets/img/react.png' },
    { name: 'React Native', img: '../../assets/img/react-native.png' },
    { name: 'C', img: '../../assets/img/c.png' },
    { name: 'Java', img: '../../assets/img/java.png' }
  ];

  // Data for Platforms & Frameworks
  platformsFrameworks = [
    { name: 'Adobe', img: '../../assets/img/adobe.png' },
    { name: 'Life', img: '../../assets/img/life.png' },
    { name: 'Open', img: '../../assets/img/open.png' },
    { name: 'Site', img: '../../assets/img/site.png' },
    { name: 'Bootstrap', img: '../../assets/img/boostrap.png' },
    { name: 'Drupal', img: '../../assets/img/drupal.png' },
    { name: 'Django', img: '../../assets/img/django.png' },
    { name: 'Microsoft .NET', img: '../../assets/img/microsoft-dot-net.png' }
  ];

  // Data for Databases
  databases = [
    { name: 'Firebase', img: '../../assets/img/firebase.png' },
    { name: 'CouchDB', img: '../../assets/img/couchdb-relax.png' },
    { name: 'MongoDB', img: '../../assets/img/mongodb.png' },
    { name: 'Oracle', img: '../../assets/img/oracle.png' },
    { name: 'MySQL', img: '../../assets/img/mysql.png' },
    { name: 'SQLite', img: '../../assets/img/sqlite.png' },
    { name: 'Cloudera', img: '../../assets/img/cloudera.png' },
    { name: 'SQL Server', img: '../../assets/img/sql-server.png' }
  ];

  // Method to set the active tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}