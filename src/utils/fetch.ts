// models
import Clients from "@/models/Clients";
import Icons from "@/models/Icons";
import Navigation from "@/models/Navigation";
import Technologies from "@/models/Technologies";
import Testimonials from "@/models/Testimonials";

export async function getNavigation() {
  return await getResData('/json/navigation.json') as Navigation;
}

export async function getClients() {
  return await getResData('/json/clients.json') as Clients;
}

export async function getIcons(path: string) {
  return await getResData(path) as Icons;
}

export async function getTechnologies() {
  return await getResData('/json/technologies.json') as Technologies;
}

export async function getTestimonials() {
  return await getResData('/json/testimonials.json') as Testimonials;
}

async function getResData(path: string) {
  const response = await fetch(path);
  return await response.json();
}