import { Injectable } from "@nestjs/common";
import { RoomsQuery } from "../../application/contracts/queries/rooms-query";

@Injectable()
export class RoomsQueryImplement implements RoomsQuery {}
