const user = {
    name: "Anbu"
};

const city = user?.city ?? "City Not Available";

console.log(city);