      //assignment 2 Q 1


let math = 90
let eng = 99
let Sci = 96

let numberSum = math + eng +Sci;

let totalmarks = 300;


let getNumber = (numberSum / totalmarks )* 100
let per = Math.ceil(getNumber)
let Grade = ""
if(per <= 50){
    Grade = "D"
}
else if (per <= 60){
    Grade = "C"
}
else if (per <= 70){
    Grade = "B"
}
else if (per <= 80){
    Grade = "B+"
}
else if (per <= 90){
    Grade = "A"
}
else if (per <= 100){
    Grade = "A+"
}
else if (per >= 100){
    Grade = "Invailde"
}
else{
    Grade = "Failed"
}
console.log(per)

document.write(`
    <table >
        <h1>Mark Sheet</h1>
        <tr>
          <th>Subjects</th>
          <th>Marks</th>
          <th>Obtain Marks</th>
          <th>Total Marks</th>
          <th>Persentage</th>
          <th>Grade</th>

        </tr>
        <tr>
          <td>Maths</td>
          <td>100</td>
          <td>${math}</td>
          <td rowspan="3">${totalmarks}</td>
        </tr>
        <tr>
          <td>English</td>
          <td>100</td>
          <td>${eng}</td>
          <td rowspan="3">${per}</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>100</td>
          <td>${Sci}</td>
          <td>${Grade}</td>
  
        </tr>
        
      </table>`)


      //assignment 2 Q 2

      var mobiles = {
        iphone: {
          iphone7: {
            processor: "Snapdragon 8 Gen 2",
            memory: {
              ram: 12,
              storage: 512,
            },
            camera: {
              rear: {
                main: 200,
                ultrawide: 12,
                telephoto: 10,
                telephotoPeriscope: 10,
              },
              front: 10,
            },
            brand:"iphone",
            battery: 5000,
            operatingSystem: "Android 13",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphone8: {
            processor: "Snapdragon 12 Gen 5",
            memory: {
              ram: 8,
              storage: 256,
            },
            brand:"iphone",
            camera: {
              rear: {
                main: 180,
                ultrawide: 15,
                telephoto: 10,
                telephotoPeriscope: 20,
              },
              front: 12,
            },
            battery: 8000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphone8plus: {
            processor: "Snapdragon 5 Gen 6",
            memory: {
              ram: 8,
              storage: 128,
            },
            brand:"iphone",
    
            camera: {
              rear: {
                main: 160,
                ultrawide: 18,
                telephoto: 10,
                telephotoPeriscope: 8,
              },
              front: 16,
            },
            battery: 5000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphoneX: {
            processor: "Snapdragon 5 Gen 4",
            memory: {
              ram: 8,
              storage: 256,
            },
            brand:"iphone",
    
            camera: {
              rear: {
                main: 130,
                ultrawide: 16,
                telephoto: 10,
                telephotoPeriscope: 18,
              },
              front: 14,
            },
            battery: 6000,
            operatingSystem: "iphone X",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphone11: {
            processor: "Snapdragon 7 Gen 9",
            memory: {
              ram: 16,
              storage: 512,
            },
            camera: {
              rear: {
                main: 150,
                ultrawide: 24,
                telephoto: 16,
                telephotoPeriscope: 10,
              },
              front: 20,
            },
            brand:"iphone",
    
            battery: 10000,
            operatingSystem: "iphone 11",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
        },
        xiomi: {
          redmiA2: {
            modelName: "Mi 12 Pro",
            display: {
              size: 6.73,
              resolution: "3200 x 1440",
              panelType: "AMOLED",
              refreshRate: 120,
            },
            brand:"xiomi",
    
            processor: "Snapdragon 8 Gen 1",
            memory: {
              ram: 8,
              storage: 256,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 4600,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
          redmi10: {
            modelName: "Mi 8 Pro",
            display: {
              size: 5.73,
              resolution: "3000 x 1320",
              panelType: "AMOLED",
              refreshRate: 100,
            },
            brand:"xiomi",
            processor: "Snapdragon 7 Gen 5",
            memory: {
              ram: 12,
              storage: 256,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            brand:"xiomi",
    
            battery: 5000,
            operatingSystem: "Android 11",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi11: {
            modelName: "Mi 14 Pro",
            display: {
              size: 6.0,
              resolution: "3000 x 1240",
              panelType: "AMOLED",
              refreshRate: 150,
            },
            brand:"xiomi",
    
            processor: "Snapdragon 8 Gen 4",
            memory: {
              ram: 12,
              storage: 512,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi12: {
            modelName: "Mi 12 Pro",
            display: {
              size: 7.4,
              resolution: "3200 x 1440",
              panelType: "AMOLED",
              refreshRate: 180,
            },
            brand:"xiomi",
    
            processor: "Snapdragon 12 Gen 1",
            memory: {
              ram: 12,
              storage: 512,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi13: {
            modelName: "Mi 14 Pro",
            display: {
              size: 8.03,
              resolution: "4200 x 1540",
              panelType: "AMOLED",
              refreshRate: 100,
            },
            brand:"xiomi",
    
            processor: "Snapdragon 8 Gen 6",
            memory: {
              ram: 12,
              storage: 256,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi13C: {
            modelName: "Mi 14 Pro",
            display: {
              size: 8.43,
              resolution: "4200 x 1340",
              panelType: "AMOLED",
              refreshRate: 100,
            },
            processor: "Snapdragon 9 Gen 5",
            memory: {
              ram: 12,
              storage: 512,
            },
            brand:"xiomi",
    
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
        },
        realme: {
          realmiNote50: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "6.5 inches",
              resolution: "FHD+ (1080 x 2400 pixels)",
              type: "AMOLED",
            },
            brand:"xiomi",
    
            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
              ram: "8GB",
              storage: "128GB",
            },
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "16MP",
              },
            },
            battery: {
              capacity: "5000mAh",
              fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmiC67: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "6.7 inches",
              resolution: "FHD+ (1280 x 2100 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
            memory: {
              ram: "8GB",
              storage: "256GB",
            },
            brand:"xiomi",
    
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "14MP",
              },
            },
            battery: {
              capacity: "5000mAh",
              fastCharging: "65W",
            },
            operatingSystem: "Android 11",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmiC53: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "7. 1inches",
              resolution: "FHD+ (1180 x 2500 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
            memory: {
              ram: "12GB",
              storage: "128GB",
            },
            brand:"xiomi",
    
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "18MP",
              },
            },
            battery: {
              capacity: "8000mAh",
              fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmi9: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "7.2 inches",
              resolution: "FHD+ (1180 x 2200 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
            memory: {
              ram: "12GB",
              storage: "256GB",
            },
            brand:"xiomi",
    
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "24MP",
              },
            },
            battery: {
              capacity: "10000mAh",
              fastCharging: "75W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmi9i: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "6.9 inches",
              resolution: "FHD+ (1480 x 2400 pixels)",
              type: "AMOLED",
            },
            brand:"xiomi",
    
            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
              ram: "12GB",
              storage: "512GB",
            },
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "16MP",
              },
            },
            battery: {
              capacity: "2000mAh",
              fastCharging: "70W",
            },
            operatingSystem: "Android 13",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
        },
        samsung: {
          samsung_Galaxy_S24: {
            brand: "Samsung",
            model: "Galaxy S24 Ultra", // Replace with specific model
      
            // Display
            displaySize: 6.8, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            memory: {
                ram: 12,
                storage: 512,
              },
      
            // Cameras
            rearCamera: {
              megapixel: 108,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",
      
            // Operating System
            operatingSystem: "Android 14",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_S51: {
            brand: "Samsung",
            model: "Galaxy S51 Pro", // Replace with specific model
      
            // Display
            displaySize: 7.2, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 9 Gen 4", // Replace with actual processor
            memory: {
                ram: 8,
                storage: 128,
              },
      
            // Cameras
            rearCamera: {
              megapixel: 112,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 8000, // mAh
            fastCharging: "45W Super Fast Charging",
      
            // Operating System
            operatingSystem: "Android 11",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_Prime: {
            brand: "Samsung",
            model: "Galaxy Prime Ultra", // Replace with specific model
      
            // Display
            displaySize: 7.4, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 8 Gen 10", // Replace with actual processor
            memory: {
                ram: 4,
                storage: 64,
              },
      
            // Cameras
            rearCamera: {
              megapixel: 108,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",
      
            // Operating System
            operatingSystem: "Android 13",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_S46: {
            brand: "Samsung",
            model: "Galaxy S46 Ultra", // Replace with specific model
      
            // Display
            displaySize: 5.11, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            memory: {
                ram: 6,
                storage: 64,
              },
      
            // Cameras
            rearCamera: {
              megapixel: 108,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "65W Super Fast Charging",
      
            // Operating System
            operatingSystem: "Android 14",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_S77: {
            brand: "Samsung",
            model: "Galaxy S77 Ultra", // Replace with specific model
      
            // Display
            displaySize: 8.5, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 12 Gen 24", // Replace with actual processor
            memory: {
                ram: 12,
                storage: 512,
              },
      
            // Cameras
            rearCamera: {
              megapixel: 158,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "85W Super Fast Charging",
      
            // Operating System
            operatingSystem: "Android 14",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: true,
          },
        },
      };
    
      let mobile = Object.keys(mobiles);
      let versions = Object.values(mobiles);
    
      for(let i = 0; i < mobile.length; i++){
            document.getElementById("mobiles").innerHTML += `<option value = ${mobile[i]}> ${mobile[i]} </option>`
      }
    
      function version() {
            let selectedMobile = document.getElementById("mobiles").value;
            let index = mobile.findIndex(element => selectedMobile === element)
            let versionKeys = Object.keys(versions[index]);
            document.getElementById("versions").innerHTML = "";
            for(let i = 0; i < versionKeys.length; i++) {
                document.getElementById("versions").innerHTML +=  `<option value= ${versionKeys[i]}>${versionKeys[i]}</option>`
            }
      }
    
      function submit() {
            let selectedMobile = document.getElementById("mobiles").value;
            let index = mobile.findIndex(element => selectedMobile === element)
            let versionVals = Object.values(versions[index]);
            let versionKeys = Object.keys(versions[index]);
            let mobileVar = document.getElementById("versions").value;
            let versionIndex = versionKeys.findIndex(element => mobileVar === element)
            let finalData = versionVals[versionIndex];
    
            document.getElementsByClassName("container")[0].innerHTML = `
            
            <header>
                <h1>${mobileVar}</h1>
            </header>
    
            <section class="overview">
                <h2>Overview</h2>
                <p>${mobileVar} combines powerful performance with a sleek design, offering a perfect balance of style and functionality.</p>
            </section>
    
            <section class="specs">
                <h2>Specifications</h2>
                <table>
                    <tr>
                        <td><strong>Processor</strong></td>
                        <td>${finalData.processor}</td>
                    </tr>
                    <tr>
                        <td><strong>RAM</strong></td>
                        <td>${finalData.memory.ram}</td>
                    </tr>
                    <tr>
                        <td><strong>Storage</strong></td>
                        <td>${finalData.memory.storage}</td>
                    </tr>
                    <tr>
                        <td><strong>Operating System</strong></td>
                        <td>${finalData.operatingSystem}</td>
                    </tr>
                </table>
            </section
                `
            console.log(mobileVar)
      }
    
    




