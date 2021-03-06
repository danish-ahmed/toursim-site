import React from "react";

const SearchTabs = () => {
  return (
    <div class="search-tabs" id="search-tabs-1">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul class="nav nav-tabs center-tabs">
              <li class="active">
                <a href="#flights" data-toggle="tab">
                  <span>
                    <i class="fa fa-plane" />
                  </span>
                  <span class="st-text">Flights</span>
                </a>
              </li>
              <li>
                <a href="#hotels" data-toggle="tab">
                  <span>
                    <i class="fa fa-building" />
                  </span>
                  <span class="st-text">Hotels</span>
                </a>
              </li>
              <li>
                <a href="#tours" data-toggle="tab">
                  <span>
                    <i class="fa fa-suitcase" />
                  </span>
                  <span class="st-text">Tours</span>
                </a>
              </li>
              <li>
                <a href="#cruise" data-toggle="tab">
                  <span>
                    <i class="fa fa-ship" />
                  </span>
                  <span class="st-text">Cruise</span>
                </a>
              </li>
              <li>
                <a href="#cars" data-toggle="tab">
                  <span>
                    <i class="fa fa-car" />
                  </span>
                  <span class="st-text">Cars</span>
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div id="flights" class="tab-pane in active">
                <form>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                      <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="From"
                            />
                            <i class="fa fa-map-marker" />
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="To"
                            />
                            <i class="fa fa-map-marker" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd1"
                              placeholder="Check In"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd2"
                              placeholder="Check Out"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                      <div class="form-group right-icon">
                        <select class="form-control">
                          <option selected>Adults</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <i class="fa fa-angle-down" />
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                      <button class="btn btn-orange">Search</button>
                    </div>
                  </div>
                </form>
              </div>

              <div id="hotels" class="tab-pane">
                <form>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                      <div class="row">
                        <div class="col-xs-12 col-sm-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd1"
                              placeholder="Check In"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd2"
                              placeholder="Check Out"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4">
                          <div class="form-group right-icon">
                            <select class="form-control">
                              <option selected>Rooms</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <i class="fa fa-angle-down" />
                          </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-4">
                          <div class="form-group right-icon">
                            <select class="form-control">
                              <option selected>Adults</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <i class="fa fa-angle-down" />
                          </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-4">
                          <div class="form-group right-icon">
                            <select class="form-control">
                              <option selected>Kids</option>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                            <i class="fa fa-angle-down" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                      <button class="btn btn-orange">Search</button>
                    </div>
                  </div>
                </form>
              </div>

              <div id="tours" class="tab-pane">
                <form>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                      <div class="form-group left-icon">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="City,Country"
                        />
                        <i class="fa fa-map-marker" />
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <div class="form-group right-icon">
                        <select class="form-control">
                          <option selected>Month</option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </select>
                        <i class="fa fa-angle-down" />
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                      <div class="row">
                        <div class="col-xs-12 col-sm-6">
                          <div class="form-group right-icon">
                            <select class="form-control">
                              <option selected>Adults</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <i class="fa fa-angle-down" />
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                          <div class="form-group right-icon">
                            <select class="form-control">
                              <option selected>Kids</option>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                            <i class="fa fa-angle-down" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                      <button class="btn btn-orange">Search</button>
                    </div>
                  </div>
                </form>
              </div>

              <div id="cruise" class="tab-pane">
                <form>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                      <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="From"
                            />
                            <i class="fa fa-map-marker" />
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="To"
                            />
                            <i class="fa fa-map-marker" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd1"
                              placeholder="Check In"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd2"
                              placeholder="Check Out"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                      <div class="form-group right-icon">
                        <select class="form-control">
                          <option selected>Adults</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <i class="fa fa-angle-down" />
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                      <button class="btn btn-orange">Search</button>
                    </div>
                  </div>
                </form>
              </div>

              <div id="cars" class="tab-pane">
                <form>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                      <div class="row">
                        <div class="col-sm-6 col-md-4">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Country"
                            />
                            <i class="fa fa-globe" />
                          </div>
                        </div>

                        <div class="col-sm-6 col-md-4">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="City"
                            />
                            <i class="fa fa-map-marker" />
                          </div>
                        </div>

                        <div class="col-sm-12 col-md-4">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Location"
                            />
                            <i class="fa fa-street-view" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd1"
                              placeholder="Check In"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <div class="form-group left-icon">
                            <input
                              type="text"
                              class="form-control dpd2"
                              placeholder="Check Out"
                            />
                            <i class="fa fa-calendar" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                      <button class="btn btn-orange">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTabs;
