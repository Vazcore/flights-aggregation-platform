export interface FlightRoute {
  airline: string;
  sourceAirport: string;
  destinationAirport: string;
  codeShare: string;
  stops: number;
  equipment?: string;
}
