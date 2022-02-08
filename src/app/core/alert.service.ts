import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private _snackBar: MatSnackBar) {}

  public showSnackbar(message: string, type?: "success" | "error"): void {
    this._snackBar.open(message, "Close", {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 5000,
      panelClass: `snackbar--${type}`,
    });
  }
}
