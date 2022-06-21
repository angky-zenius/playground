var kafka = require("node-rdkafka");

const PRODUCER_BROKER = "172.30.10.54:9092";
const PRODUCER_TOPIC = "agenda-messaging";

let producer;

function startProducer() {
    producer = new kafka.Producer({
        "metadata.broker.list": PRODUCER_BROKER
    });
    producer.connect();
    const onReady = () => {
        console.log("Ready");
        pushNotification();
    };
    const onEventError = (error) => {
        console.log(error);
    };
    const onError = (error) => {
        console.log(error);
    };
    producer
        .on("ready", onReady)
        .on("event.error", onEventError)
        .on("error", onError);
}

function pushNotification() {
    const data = {
        oderId: "ORDER001",
        user: {
            email: "albycahaya@gmail.com",
            fullName: "Angky Cahaya Putra"
        },
        product: {
            id: "BADBRIS",
            sku: "BADBRIS",
            title: "Belajar Memasak",
            name: "Belajar Memasak Rantai",
            description: "Belajar memasak menggunakan stang sepeda",
            trainingProvider: {
                name: "Dani",
                about: "Dani adalah seorang chef professional di bidang memasak sepeda motor. Dani telah berkiprah di dunia mesin selama 40 tahun. Di umurnya yang masih 20 tahun, Dani telah memasak ribuan sepeda motor.",
                partnerLogo: "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw"
            }
        }
    }
    try {
        const value = JSON.stringify(data);
        console.log(value);
        producer.produce(
            PRODUCER_TOPIC,
            null,
            Buffer.from(value),
            "zenpro-purchase",
            Date.now()
        );
    } catch (error) {
        console.log(error);
    }
}

startProducer();